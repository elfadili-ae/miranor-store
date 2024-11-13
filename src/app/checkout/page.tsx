"use client";

import { useStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
7;
import { media as wixMedia } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const wixClient = useWixClient();
  const { cart, counter, isLoading, removeItem } = useStore();

  console.log("isLoading", isLoading);
  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      {isLoading ? (
        <div className="w-full h-24 flex justify-center items-center">
          <p className="text-xl">Loading...</p>
        </div>
      ) : counter === 0 ? (
        <div className="w-full h-24 flex justify-center items-center">
          <p className="text-xl">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">Check your items and the quantity.</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {cart.lineItems!.map((item) => {
                console.log(item);
                return (
                  <div
                    key={item._id}
                    className="flex gap-1 bg-white rounded-sm px-1 py-1"
                  >
                    <Image
                      className="rounded-md object-cover"
                      src={
                        item.image
                          ? wixMedia.getScaledToFillImageUrl(
                              item.image,
                              64,
                              64,
                              {}
                            )
                          : "/product.png"
                      }
                      alt="product"
                      height={64}
                      width={64}
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <Link
                          href="/products/"
                          className="font-semibold text-xs pr-[2px]"
                        >
                          {item.productName?.original?.length! > 42
                            ? `${item.productName?.original?.slice(0, 40)}...`
                            : item.productName?.original}
                        </Link>
                        <p className="font-semibold flex flex-row gap-[2px]">
                          <span className="text-xs align-text-top">MAD</span>
                          {item.price?.amount}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="">
                          <span className="text-xs">Quantity: </span>
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => {
                            removeItem(wixClient, item._id!);
                          }}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <div className="">
              {/* Total */}
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>

                  <p className="font-semibold text-gray-900">
                    MAD{" "}
                    {
                      //@ts-ignore
                      Number(cart.subtotal.amount).toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">MAD 80.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  MAD{" "}
                  {
                    //@ts-ignore
                    (Number(cart.subtotal.amount) + 80).toLocaleString(
                      "fr-FR",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )
                  }
                </p>
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
