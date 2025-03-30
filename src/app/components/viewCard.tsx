import Image from "next/image";
import { Card } from "../../../types/card";
import QRCode from "./QRCode";

interface viewProps {
  cardInfo: Card;
}

export default function View({ cardInfo }: viewProps) {
  if (!cardInfo) return <div></div>;

  return (
    <div className="flex flex-col gap-3 items-center w-full h-full">
      <QRCode cardInfo={cardInfo} showContact={true} />
      {cardInfo.avatar ? (
        <Image
          alt="Avatar"
          src={cardInfo.avatar}
          width={150}
          height={150}
          className="rounded-full"
        />
      ) : (
        ""
      )}
      <div className="flex flex-col justify-start w-full gap-4">
        <p className="text-blue-400 font-bold text-4xl">
          {(cardInfo?.fName ?? "") + ` ` + (cardInfo?.lName ?? "")}
        </p>
        <p className="text-2xl">{cardInfo?.co}</p>
        <p className="text-2xl">{cardInfo?.title}</p>

        {cardInfo.email ? (
          <div className="flex flex-row justify-between align-middle w-full items-center gap-8 text-blue-400">
            <p className="text-2xl">{cardInfo?.email}</p>
            <i className="pi pi-envelope" />
          </div>
        ) : (
          <div />
        )}

        {cardInfo.phone ? (
          <div className="flex flex-row justify-between align-middle w-full items-center gap-8 text-blue-400">
            <p className="text-2xl">{cardInfo?.phone}</p>
            <i className="pi pi-phone" />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
