import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import type { Card } from "../../../types/card";
import QRCode from "./QRCode";

export default function Create() {
  const router = useRouter();

  const [avatar, setAvatar] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [co, setCo] = useState<string>("");

  const [card, setCard] = useState<Card>({});

  useEffect(() => {
    const cardInfo: Card = {
      title: title,
      avatar: avatar,
      fName: fName,
      lName: lName,
      co: co,
      email: email,
      phone: phone,
    };
    setCard(cardInfo);
    console.log("New Card:", cardInfo);
  }, [avatar, title, fName, lName, email, phone, co]);

  const viewCard = () => {
    const params = new URLSearchParams({
      type: "view",
      fName: card.fName || "",
      lName: card.lName || "",
      avatar: card.avatar || "",
      title: card.title || "",
      co: card.co || "",
      email: card.email || "",
      phone: card.phone || "",
    });

    router.push(`/?${params}`);
  };

  return (
    <div className="flex flex-col gap-3 items-center w-full h-full">
      <QRCode cardInfo={card} showContact={false} />
      <div className="flex flex-col justify-between items-start gap-2 w-full">
        <div className="flex flex-col items-start w-full">
          <label htmlFor="fName" className="mx-1 font-bold">
            First Name
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            id="fName"
            placeholder="Dwayne"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="lName" className="mx-1 font-bold">
            Last Name
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            id="lName"
            placeholder="Johnson"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="avatar" className="mx-1 font-bold">
            Avatar Image Link
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            id="avatar"
            placeholder="https://"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="company" className="mx-1 font-bold">
            Company
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            id="company"
            placeholder="Fitness Co."
            value={co}
            onChange={(e) => setCo(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="title" className="mx-1 font-bold">
            Title
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            id="title"
            placeholder="Manager"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="email" className="mx-1 font-bold">
            Email
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            type="text"
            id="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="phone" className="mx-1 font-bold">
            Phone Number
          </label>
          <InputText
            className="p-inputtext-sm w-full"
            type="tel"
            id="phone"
            placeholder="+1 (555) 552-5569"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <button
            onClick={viewCard}
            className="flex flex-row gap-2 font-light items-center border-blue-500 rounded-lg shadow-lg border-1 p-2 bg-blue-400/10 hover:bg-blue-500/20 hover:text-white text-blue-200 hover:scale-95 transition-all"
          >
            <i className="pi pi-download" style={{ fontSize: "0.75rem" }} />
            <p className="text-xs">View Card</p>
          </button>
        </div>
      </div>
    </div>
  );
}
