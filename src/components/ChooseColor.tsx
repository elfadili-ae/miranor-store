"use client";

import { products } from "@wix/stores";
import React, { useState } from "react";

const ChooseColor = ({ options }: { options: products.ProductOption }) => {
  const [choosenColor, setChoosenColor] = useState<Number>();
  return (
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
  );
};

export default ChooseColor;
