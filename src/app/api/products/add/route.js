import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, description, price, category, image, features } = body;

    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("producthub");

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      category,
      image: image || `https://picsum.photos/600/400?random=${Date.now()}`,
      features: features || [],
      inStock: true,
      rating: 0,
      reviews: 0,
      createdBy: session.user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);

    return NextResponse.json({
      success: true,
      data: {
        id: result.insertedId.toString(),
        ...newProduct,
        _id: undefined,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}
