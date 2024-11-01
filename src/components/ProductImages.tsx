"use client";

import { products } from "@wix/stores";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ media }: { media: products.Product["media"] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="w-full flex flex-col h-max">
      <div className="relative w-full h-[428px]">
        <Image
          src={
            media?.items
              ? (media?.items[currentImage].image?.url as string)
              : "/product.png"
          }
          alt=""
          fill
          sizes="50vw"
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full flex justify-between items-center mt-2">
        {media?.items &&
          media?.items.map((item, index) => {
            return (
              <div
                key={item._id}
                className="relative w-[18%] aspect-square cursor-pointer"
                onClick={() => {
                  setCurrentImage(index);
                }}
              >
                <Image
                  src={item ? (item.image?.url as string) : "/product.png"}
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
