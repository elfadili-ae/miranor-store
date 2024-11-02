"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({
  currentPage,
  hasNext,
  hasPrev,
}: {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const replace = useRouter();

  const handleChangePage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace.push(`${pathname}?${params}`);
  };
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 mt-8 flex justify-between">
      <button
        className="bg-black text-white w-24 py-1 rounded-md disabled:bg-gray-400"
        disabled={!hasPrev}
        onClick={() => {
          handleChangePage(currentPage - 1);
        }}
      >
        Previous
      </button>
      <button
        className="bg-black text-white w-24 py-1 rounded-md disabled:bg-gray-400"
        disabled={!hasNext}
        onClick={() => {
          handleChangePage(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
