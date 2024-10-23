import React from "react";
import Arrow from "./Arrow";

const Filters = () => {
  return (
    <div className="flex justify-between gap-y-3 mt-8 flex-wrap">
      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          name="min-price"
          placeholder="min price"
          className="w-20 sm:w-24 h-10 max-sm:text-sm border border-gray-300 rounded-full text-gray-600 px-1 text-center bg-white hover:border-gray-400 focus:outline-none appearance-none"
        />
        <input
          type="text"
          name="max-price"
          placeholder="max price"
          className="w-20 sm:w-24 h-10 max-sm:text-sm border border-gray-300 rounded-full text-gray-600 px-1 text-center bg-white hover:border-gray-400 focus:outline-none appearance-none"
        />

        <div className="relative inline-flex">
          <Arrow />
          <select
            name="size"
            id="size"
            className="border border-gray-300 max-sm:text-sm rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>Size</option>
          </select>
        </div>

        <div className="relative inline-flex">
          <Arrow />
          <select
            name="color"
            id="color"
            className="border border-gray-300 max-sm:text-sm rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>Color</option>
          </select>
        </div>

        <div className="relative inline-flex">
          <Arrow />
          <select
            name="category"
            id="category"
            className="border border-gray-300 max-sm:text-sm rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>Category</option>
          </select>
        </div>
      </div>

      <div className="relative inline-flex">
        <Arrow />
        <select
          name="sortby"
          id="sortby"
          className="max-sm:text-sm border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
          <option>Sort by</option>
          <option>low to high price</option>
          <option>high to low price</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
