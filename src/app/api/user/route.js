import { NextResponse } from "next/server";
export async function GET(request) {
  return NextResponse.json({ name: "ankit", age: 55 }, { status: 200 });
}
