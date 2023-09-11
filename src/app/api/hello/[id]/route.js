import { NextResponse } from "next/server";
import { data } from "@/utils/db.js";

export function GET(request, conntent) {
  const user = data.filter((item) => item.id == conntent.params.id);
  return NextResponse.json(
    user.length == 0
      ? { result: "no data found", success: false }
      : { result: user, success: true }
  );
}
