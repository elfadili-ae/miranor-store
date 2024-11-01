"use client";

import React from "react";
import Arrow from "./Arrow";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  const resetFilters = () => {};

  return (
    <div className="flex justify-between gap-y-3 mt-8 flex-wrap mb-10">
      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="w-20 sm:w-24 h-10 max-sm:text-sm border border-gray-300 rounded-full text-gray-600 px-1 text-center bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="w-20 sm:w-24 h-10 max-sm:text-sm border border-gray-300 rounded-full text-gray-600 px-1 text-center bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleFilterChange}
        />

        <div className="relative inline-flex">
          <Arrow />
          <select
            name="cat"
            id="category"
            className="border border-gray-300 max-sm:text-sm rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onChange={handleFilterChange}
          >
            <option>Category</option>
            <option value="all-products">All</option>
            <option value="accessories">Accessories</option>
            <option value="home">Home</option>
            <option value="men">Men</option>
            <option value="office">Office</option>
            <option value="phones">Phones</option>
            <option value="shoes">Shoes</option>
            <option value="toys-&-games">Toys & Games</option>
            <option value="women">Women</option>
          </select>
        </div>
      </div>

      <div className="relative inline-flex">
        <Arrow />
        <select
          name="sortby"
          id="sortby"
          className="max-sm:text-sm border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleFilterChange}
        >
          <option>Sort by</option>
          <option value="asc price">low to high price</option>
          <option value="desc price">high to low price</option>
          <option value="desc lastUpdated">Newest</option>
          <option value="asc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
