"use client";

import { slides } from "@/constants/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const sliding = setInterval(() => {
      const nextSlide =
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setcurrentSlide(nextSlide);
    }, 3000);

    return () => {
      clearInterval(sliding);
    };
  }, [currentSlide]);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col lg:flex-row overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((item) => {
          return (
            <div
              key={`${item.id}_${item.title}`}
              className="w-screen h-full flex flex-col lg:flex-row"
            >
              <div
                className={`${item.bg} h-1/2 w-full lg:w-1/2 lg:h-full flex gap-2 flex-col justify-center items-center text-center p-4`}
              >
                <h1 className="text-2xl md:text-4xl lg:text-6xl">
                  {item.title}
                </h1>
                <p className="md:text-xl lg:2xl:">{item.description}</p>
                <Button name="Shop Now" link="/products" dark />
              </div>
              <div className="relative h-1/2 w-full lg:w-1/2 lg:h-full flex bg-blue-500">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute z-10 m-auto left-1/2 -translate-x-1/2 bottom-4 flex gap-4">
        {slides.map((item) => {
          return (
            <div
              key={`slide_${item.id}`}
              className="w-6 h-6 rounded-full border-[2px] border-amber-600 flex justify-center items-center"
              onClick={() => {
                setcurrentSlide(item.id);
              }}
            >
              <div
                className={`w-2 h-2 ${
                  currentSlide === item.id && "scale-[200%]"
                }  bg-amber-600 rounded-full transition-all ease-in-out duration-700`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
