"use client";
import { Card } from "../../../types/card";

import { useEffect, useState } from "react";

import { QRCodeSVG } from "qrcode.react";

interface props {
  cardInfo: Card;
  showContact: boolean;
}

export default function QRCode({ cardInfo, showContact }: props) {
  const [host, setHost] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHost(window.location.origin);
    console.log("location:", window.location);
  }, [cardInfo]);
  return (
    <div className="w-[85%] justify-center flex flex-col items-center m-4">
      <QRCodeSVG
        className="w-full h-full max-w-80"
        value={`${host}/?type=view&fName=${cardInfo.fName}&lName=${cardInfo.lName}&avatar=${cardInfo.avatar}&co=${cardInfo.co}&title=${cardInfo.title}&email=${cardInfo.email}&phone=${cardInfo.phone}`}
      />

      <div className="flex flex-row justify-between pt-2 gap-2 w-full">
        <button className="flex flex-row gap-2 font-light items-center border-blue-500 rounded-lg shadow-lg border-1 p-2 hover:bg-blue-500/20 hover:text-white text-blue-200 hover:scale-95 transition-all">
          <i className="pi pi-download" style={{ fontSize: "0.75rem" }} />
          <p className="text-xs">QR Code</p>
        </button>
        {showContact ? (
          <button className="flex flex-row gap-2 font-light items-center border-blue-500 rounded-lg shadow-lg border-1 p-2 hover:bg-blue-500/20 hover:text-white text-blue-200 hover:scale-95 transition-all">
            <i className="pi pi-user" style={{ fontSize: "0.75rem" }} />
            <p className="text-xs">{"Contact (.vcf)"}</p>
          </button>
        ) : (
          <div />
        )}
        <button className="flex flex-row gap-2 font-light items-center border-blue-500 rounded-lg shadow-lg border-1 p-2 hover:bg-blue-500/20 hover:text-white text-blue-200 hover:scale-95 transition-all">
          <i className="pi pi-link" style={{ fontSize: "0.75rem" }} />
          <p className="text-xs">{"Link"}</p>
        </button>
      </div>
    </div>
  );
}
