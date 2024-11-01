"use client";

import React, { useState } from "react";

const ChooseSize = () => {
  const [choosenSize, setChoosenSize] = useState<string>();

  return (
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
  );
};

export default ChooseSize;
