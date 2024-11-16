"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.target.value;
    console.log(searchTerm);
    setSearchTerm(val);
  };

  const handleSearchButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.length > 2) {
      router.push(`/products?name=${searchTerm}`);
    }
  };

  return (
    <form
      onSubmit={handleSearchButton}
      className=" flex-1 h-9 flex bg-slate-100 rounded-full overflow-hidden"
    >
      <input
        type="text"
        name="name"
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearchInput}
        className="p-1 pl-4 flex-1 bg-transparent text-black focus:outline-none"
      />
      <button
        type="submit"
        className="w-6 h-full mr-2 flex justify-center items-center"
      >
        <Image src="/search.png" alt="search button" width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchBar;
