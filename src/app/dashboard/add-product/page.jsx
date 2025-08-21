"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiPlus, HiX } from "react-icons/hi";
import ProtectedRoute from "@/components/ProtectedRoute";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import FormSelect from "@/components/FormSelect";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    features: [""],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const categories = [
    { value: "Audio", label: "Audio" },
    { value: "Wearables", label: "Wearables" },
    { value: "Accessories", label: "Accessories" },
    { value: "Gaming", label: "Gaming" },
    { value: "Electronics", label: "Electronics" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({
      ...prev,
      features: newFeatures,
    }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      features: newFeatures,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const filteredFeatures = formData.features.filter(
        (feature) => feature.trim() !== ""
      );

      const response = await fetch("/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          features: filteredFeatures,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Product added successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          image: "",
          features: [""],
        });
        setTimeout(() => {
          router.push("/products");
        }, 2000);
      } else {
        setError(result.error || "Failed to add product");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="px-4 py-8 bg-white dark:bg-gray-900 min-h-screen w-screen">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Add New Product
          </h1>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Product Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              placeholder="Enter product name"
            />

            <FormTextarea
              label="Description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
              placeholder="Enter product description"
              rows={4}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                required
                placeholder="0.00"
              />

              <FormSelect
                label="Category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                options={categories}
                required
              />
            </div>

            <FormInput
              label="Image URL"
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
              placeholder="https://example.com/image.jpg (optional)"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Features
              </label>
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      placeholder="Enter feature"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors"
                      >
                        <HiX className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors"
                >
                  <HiPlus className="h-4 w-4 mr-1" />
                  Add Feature
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 dark:bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 disabled:opacity-50 font-medium transition-colors"
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>

              <button
                type="button"
                onClick={() => router.push("/products")}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}
