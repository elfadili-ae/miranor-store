import Image from "next/image";
import React from "react";
import Button from "./Button";

const OfferBanner = () => {
  return (
    <div className="container h-52 px-4  mt-4 bg-orange-400 mx-auto flex justify-between items-center">
      <div className="flex w-2/3 flex-col py-4  gap-4 items-center justify-between">
        <h2 className="text-center text-xl sm:text-3xl md:text-6xl tracking-tighter font-bold uppercase">
          Up to 50% Off
        </h2>
        <Button name="Shop Now" link="/products" dark />
      </div>
      <div className="flex w-1/3 h-full relative">
        <Image
          src="/sale.png"
          alt="special offer"
          fill
          className="object-contain max-sm:scale-125"
        />
      </div>
    </div>
  );
};

export default OfferBanner;
