"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
];

const ProductImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="w-full flex flex-col h-max">
      <div className="relative w-full h-[428px]">
        <Image
          src={images[currentImage].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex justify-between items-center mt-2">
        {images.map((item, index) => {
          return (
            <div
              className="relative w-[18%] aspect-square cursor-pointer"
              onClick={() => {
                setCurrentImage(index);
              }}
            >
              <Image
                src={item.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
