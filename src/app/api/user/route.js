import { NextResponse } from "next/server";
export async function GET(request) {
  return NextResponse.json({ name: "ankit", age: 55 }, { status: 200 });
}

export async function POST(req) {
  const paylod = await req.json();
  console.log(paylod.name);
  return NextResponse.json("hello");
}
