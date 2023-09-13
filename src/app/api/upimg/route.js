import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData(); //get form data from client
  const file = data.get("file"); //get file
  if (!file) {
    return NextResponse.json({
      message: "please select a file",
      success: false,
    });
  }
  //chenge file into buffer
  const bytedata = await file.arrayBuffer(); //file bufferd
  const buffer = Buffer.from(bytedata); //get buffet
  const path = `./public/${file.name}`; //get where u can save img
  await writeFile(path, buffer); //save img in your public folder cause u'v given path of public folder
  return NextResponse.json({
    message: "img uploaded successfully",
    success: true,
  });
}
