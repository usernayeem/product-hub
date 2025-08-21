import clientPromise from "./mongodb";
import bcrypt from "bcryptjs";

export async function createUser(name, email, password) {
  const client = await clientPromise;
  const db = client.db("producthub");

  // Check if user already exists
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  const result = await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    id: result.insertedId.toString(),
    name,
    email,
  };
}

export async function getUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("producthub");

  const user = await db.collection("users").findOne({ email });
  return user;
}

export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
