"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Tutoriales de Moviles",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title: "Tutoriales de PC",
    image: "/slider2.jpg",
  },
  {
    id: 3,
    title: "Otros Tutoriales",
    image: "/slider3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(50vh-60px)] md:h-[calc(100vh-60px)]">
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt="imagen-slider-1"
          fill
          className="object-cover"
        />
        <div className=" flex gap-8 font-bold absolute h-full bg-gradient-to-t from-black to-black/30 w-full bottom-0">
          <h1 className="flex justify-center items-center uppercase p-4 font-bold md:p-10 md:text-6xl lg:text-7xl absolute bottom-2 left-0">
            {data[currentSlide].title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
