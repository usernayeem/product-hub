export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  step,
  min,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        step={step}
        min={min}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
