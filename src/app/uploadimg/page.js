"use client";

import { useState } from "react";

export default function Page() {
  const [img, setImg] = useState();
  const onsubmitfunc = async (e) => {
    e.preventDefault();
    console.log(img);
    const data = new FormData();
    data.set("file", img);
    const res = await fetch("api/upimg", {
      method: "POST",
      body: data,
    });
    const responsd = await res.json();
    console.log(responsd);
    if (responsd.success) {
      alert("img uploaded");
    }
  };
  return (
    <div>
      <form onSubmit={onsubmitfunc}>
        <h1 className="text-center">upload img</h1>
        <input type="file" onChange={(e) => setImg(e.target.files?.[0])} />
        <input type="submit" name="btn" />
      </form>
    </div>
  );
}
