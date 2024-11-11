"use client";

import { useStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import React, { useState, useEffect } from "react";

const AddQuantity = ({
  productID,
  variantID,
  stock,
}: {
  productID: string;
  variantID: string;
  stock: number;
}) => {
  const wixClient = useWixClient();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useStore();

  const handleAddQuantity = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const handleReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // const addToCart = async () => {
  //   const response = await wixClient.currentCart.addToCurrentCart({
  //     lineItems: [
  //       {
  //         catalogReference: {
  //           appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
  //           catalogItemId: productID,
  //           ...(variantID && { options: { variantId: variantID } }),
  //         },
  //         quantity: quantity,
  //       },
  //     ],
  //   });
  // };

  useEffect(() => {
    if (quantity > stock) {
      setQuantity(1);
    }
  }, [variantID]);

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-lg font-semibold">Choose quantity:</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="inline-flex items-center mt-2">
          <button
            onClick={handleReduceQuantity}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {quantity}
          </div>
          <button
            onClick={handleAddQuantity}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          {stock > 0 ? (
            <p className="ml-2">
              Only <span className="text-red-500">{stock} items</span> left
            </p>
          ) : (
            <p className="ml-2 text-red-500">Out of stock</p>
          )}
        </div>

        <button
          onClick={() => {
            addItem(wixClient, productID, quantity, variantID);
          }}
          className="h-max py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 flex items-center justify-center"
        >
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddQuantity;
