import { connectionString } from "@/app/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { productModel } from "../models/product";

export async function GET() {
  await mongoose.connect(connectionString);
  const data = await productModel.find();
  console.log(data);
  return NextResponse.json(data);
}

export async function POST(request) {
  await mongoose.connect(connectionString);
  const payload = await request.json();
  const productData = new productModel(payload);
  const res = await productData.save();
  return NextResponse.json({
    success: true,
    message: "product created",
    respons: res,
  });
}
