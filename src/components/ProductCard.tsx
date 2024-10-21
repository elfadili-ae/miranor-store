import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardTypes = {
  name: string;
  description: string;
  link: string;
  price: number;
};

const ProductCard: React.FC<ProductCardTypes> = ({
  name,
  description,
  link,
  price,
}) => {
  return (
    <Link
      href={link}
      className="flex flex-col gap-2 justify-between w-[90%] sm:w-[44%] lg:w-[22%] shadow-[2px_2px_2px_2px_rgb(0_0_0/0.1)]"
    >
      <div className="relative w-full h-72 group">
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product name"
          fill
          sizes="25vw"
          className="object-cover "
        />
        <Image
          src="https://images.unsplash.com/photo-1518527399940-f3f768f47dd2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product name"
          fill
          sizes="25vw"
          className="hidden group-hover:block z-10 absolute top-0 left-0 object-cover"
        />
      </div>
      <h3 className="font-bold text-center">{name}</h3>
      <p className="text-sm text-center px-2">{description}</p>
      <div className="flex justify-center gap-3">
        <div className="w-5 h-5 rounded-full bg-red-600 border-[1px] border-black"></div>
        <div className="w-5 h-5 rounded-full bg-blue-600 border-[1px] border-black"></div>
        <div className="w-5 h-5 rounded-full bg-white-600 border-[1px] border-black"></div>
      </div>
      <div className="flex justify-between items-center pt-2 pb-4 px-2">
        <h3 className="text-xl font-semibold">${price}</h3>
        <div className="px-8 sm:px-4 py-2 rounded-md bg-black text-white">
          Add to cart
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
