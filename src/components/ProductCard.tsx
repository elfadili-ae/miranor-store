"use client";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

type ProductCardTypes = {
  name: string;
  description: string;
  link: string;
  price: number;
  currency: string;
  media: products.Media;
};

const ProductCard: React.FC<ProductCardTypes> = ({
  name,
  description,
  link,
  price,
  currency,
  media,
}) => {
  const [sanitizedDescription, setSanitizedDescription] = useState("");

  useEffect(() => {
    setSanitizedDescription(DOMPurify.sanitize(description));
  }, [description]);

  return (
    <Link
      href={link}
      className="flex flex-col gap-2 justify-between w-[90%] sm:w-[44%] lg:w-[22%] shadow-[2px_2px_2px_2px_rgb(0_0_0/0.1)]"
    >
      <div className="relative w-full h-72 group">
        <Image
          src={media.mainMedia?.image?.url || "/product.png"}
          alt="product name"
          fill
          sizes="25vw"
          className="object-cover "
        />
        <Image
          src={
            media.items ? (media.items[1].image?.url as string) : "/product.png"
          }
          alt="product name"
          fill
          sizes="25vw"
          className="hidden group-hover:block z-10 absolute top-0 left-0 object-cover"
        />
      </div>
      <h3 className="font-bold text-center">{name}</h3>
      <p
        className="text-sm text-center px-2"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
      <div className="flex justify-center gap-3">
        <div className="w-5 h-5 rounded-full bg-red-600 border-[1px] border-black"></div>
        <div className="w-5 h-5 rounded-full bg-blue-600 border-[1px] border-black"></div>
        <div className="w-5 h-5 rounded-full bg-white-600 border-[1px] border-black"></div>
      </div>
      <div className="flex justify-between items-center pt-2 pb-4 px-2">
        <h3 className="text-xl font-semibold">
          {currency} {price}
        </h3>
        <div className="px-8 sm:px-4 py-2 rounded-md bg-black text-white">
          Add to cart
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
