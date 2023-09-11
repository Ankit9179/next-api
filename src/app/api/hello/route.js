import { NextResponse } from "next/server";
import { data } from "@/utils/db.js";

export function GET() {
  return NextResponse.json(data);
}
