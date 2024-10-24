"use client";

import AddQuantity from "@/components/AddQuantity";
import ProductImages from "@/components/ProductImages";
import React, { useState } from "react";

const ProductPage = () => {
  const [choosenColor, setChoosenColor] = useState<Number>();
  const [choosenSize, setChoosenSize] = useState<string>();
  return (
    <div className="relative flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 mt-4 gap-y-4">
      <div className="w-full h-full lg:w-1/2 lg:sticky lg:top-4 flex lg:px-4">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 lg:px-2 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-4xl">Product title</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam
          dicta fuga debitis eum. Obcaecati cumque quasi qui accusamus magnam
          dolores, explicabo eum alias? Nulla aspernatur vitae esse harum
          fugiat?
        </p>

        <h3 className="text-lg">
          <span className="text-gray-600 line-through mr-3 align-text-bottom">
            $55
          </span>
          <span className="text-xl font-semibold">$40</span>
        </h3>

        <h3 className="text-lg font-semibold">Choose a color:</h3>
        <div className="flex justify-start gap-3">
          <div
            className={`p-1 rounded-full border-[2px] ${
              choosenColor === 0 ? " border-red-400" : "border-white"
            } border-black`}
            onClick={() => {
              setChoosenColor(0);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-red-600 border-[1px] border-black"></div>
          </div>
          <div
            className={`p-1 rounded-full border-[2px] ${
              choosenColor === 1 ? " border-red-400" : "border-white"
            } border-black`}
            onClick={() => {
              setChoosenColor(1);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 border-[1px] border-black"></div>
          </div>
          <div
            className={`p-1 rounded-full border-[2px] ${
              choosenColor === 2 ? " border-red-400" : "border-white"
            } border-black`}
            onClick={() => {
              setChoosenColor(2);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white border-[1px] border-black"></div>
          </div>
        </div>

        <h3 className="text-lg font-semibold">Choose a size:</h3>
        <div className="flex justify-start gap-3 text-red-500">
          <div
            className={`cursor-pointer py-1 px-2 ring-1 ring-red-400 ${
              choosenSize === "small" ? "bg-red-400 text-white" : "bg-white"
            } rounded-full`}
            onClick={() => {
              setChoosenSize("small");
            }}
          >
            Small
          </div>
          <div
            className={`cursor-pointer py-1 px-2 ring-1 ring-red-400 ${
              choosenSize === "medium" ? "bg-red-400 text-white" : "bg-white"
            } rounded-full`}
            onClick={() => {
              setChoosenSize("medium");
            }}
          >
            Medium
          </div>
          <div
            className={`cursor-pointer py-1 px-2 ring-1 ring-red-400 ${
              choosenSize === "large" ? "bg-red-400 text-white" : "bg-white"
            } rounded-full`}
            onClick={() => {
              setChoosenSize("large");
            }}
          >
            Large
          </div>
        </div>

        <AddQuantity />

        <hr className="mt-1" />

        <h3 className="text-lg font-semibold">Product info:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
          dignissimos numquam architecto exercitationem incidunt iusto, placeat
          quisquam asperiores cum animi, magni quam nobis? Delectus recusandae
          possimus reprehenderit quam fugiat? <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor est
          numquam vitae tenetur blanditiis et perspiciatis sunt nam consectetur
          deleniti? Minus repudiandae molestiae ullam totam magnam. Eius nostrum
          earum minus?
        </p>

        <h3 className="text-lg font-semibold">Return and Refund Policy:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
          dignissimos numquam architecto exercitationem incidunt iusto, placeat
          quisquam asperiores cum animi, magni quam nobis? Delectus recusandae
          possimus reprehenderit quam fugiat?
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
