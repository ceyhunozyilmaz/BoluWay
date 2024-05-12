import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import { ProductType } from "@/types/types";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const Offer = async () => {
  const offerdProducts: ProductType[] = await getData();
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAIENR  */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Lezzetli Burger & Patates Kızartması
        </h1>
        <p className="text-white xl:text-xl">
          Patates kızartması ve cheddar peyniri kombinasyonu, damakta unutulmaz
          bir tat bırakır. Patatesin hafif tatlılığı, cheddar peynirinin tuzlu
          ve yoğun lezzetiyle mükemmel bir denge oluşturur.
        </p>
        {/* Timer Library */}
        <CountDown />
        <Link href={"product/clw24hy5s000d8zyftard8of8"}>
          <button className="bg-red-500 text-white rounded-md py-3 px-6">
            SİPARİŞ VER
          </button>
        </Link>
      </div>
      {/* IMAGE CONTAIENR  */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
