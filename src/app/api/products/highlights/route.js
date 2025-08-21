import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("producthub");

    const products = await db
      .collection("products")
      .find({})
      .sort({ createdAt: -1 })
      .limit(4)
      .toArray();

    const formattedProducts = products.map((product) => ({
      ...product,
      id: product._id.toString(),
      _id: undefined,
    }));

    return NextResponse.json({
      success: true,
      data: formattedProducts,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch highlights" },
      { status: 500 }
    );
  }
}
