"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "her zaman taze, her zaman çıtır ve her zaman sıcak",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "İstanbul'un neresinde olursanız olun siparişinizi teslim ediyoruz",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Ailenizle paylaşabileceğiniz en iyi pizza",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-sky-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center  flex-col gap-8 text-red-500  font-bold ">
        <h1 className="text-3xl text-center uppercase md:p-10 p-4 md:text-3xl xl:text-3xl">
          {data[currentSlide].title}
        </h1>
        <Link href="menu">
          <button className="bg-red-500 text-white py-4 px-8 rounded-lg ">
            Sipariş Ver
          </button>
        </Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
