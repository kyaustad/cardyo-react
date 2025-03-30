"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Create from "./createCard";
import View from "./viewCard";
import type { Card } from "../../../types/card";

export default function Main() {
  const query = useSearchParams();
  const type = query.get("type");
  const [data, setData] = useState<Card>({});

  useEffect(() => {
    if (type === "view") {
      const cardInfo = {
        title: query.get("title"),
        avatar: query.get("avatar"),
        fName: query.get("fName"),
        lName: query.get("lName"),
        co: query.get("co"),
        email: query.get("email"),
        phone: query.get("phone"),
      };

      setData(cardInfo);
    }
  }, [type, query]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-2 ">
      <div className="w-full h-8 flex flex-row items-center justify-between align-middle ">
        <a
          href={`${
            window.location.origin
              ? `${window.location.origin}`
              : "http://localhost:3000"
          }`}
        >
          <button className="bg-blue-400/50 p-2 flex place-items-center aspect-square rounded transition-all hover:bg-blue-500/80 hover:scale-95">
            <i className="pi pi-plus"></i>
          </button>
        </a>
      </div>
      <div className=" flex flex-col items-center place-items-center w-fit h-fit p-6 bg-zinc-300/20 rounded-xl shadow-xl pb-10 md:w-[33%] ">
        {type === "view" ? <View cardInfo={data} /> : <Create />}
      </div>
    </div>
  );
}
