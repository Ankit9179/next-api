import { connectionString } from "@/app/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { productModel } from "../models/product";

console.log(connectionString);
export async function GET() {
  await mongoose.connect(connectionString);
  const data = await productModel.find();
  console.log(data);
  return NextResponse.json(data);
}
