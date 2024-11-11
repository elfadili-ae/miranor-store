"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, counter, isLoading, removeItem } = useStore();

  return (
    <div className="absolute w-72 right-0 top-8 bg-black flex flex-col py-3 rounded-md">
      <h3 className="w-full text-white font-semibold mb-2 p-1 text-center border-b-2 border-white">
        Shopping Cart
      </h3>
      {isLoading ? (
        <p className="text-white text-center py-4">Loading...</p>
      ) : counter === 0 ? (
        <p className="text-white text-center py-4">The cart is empty</p>
      ) : (
        <>
          <div className="w-full flex flex-col gap-1 mb-2 p-1">
            {cart.lineItems!.map((item) => {
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
                            44,
                            44,
                            {}
                          )
                        : "/product.png"
                    }
                    alt="product"
                    height={44}
                    width={44}
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link
                        href="/products/"
                        className="font-semibold text-xs pr-[2px]"
                      >
                        {item.productName?.original?.length! > 32
                          ? `${item.productName?.original?.slice(0, 30)}...`
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
          <div className="flex justify-between font-bold px-2 mb-2">
            <p className="text-white">Subtotal</p>
            <p className="text-white">
              <span className="text-sm align-text-top">MAD </span>
              {
                //@ts-ignore
                Number(cart.subtotal.amount).toLocaleString("en-US")
              }
            </p>
          </div>
          <p className="text-xs text-white pb-2 border-b-2 text-center border-white mb-3">
            Shipping & taxes calculated at checkout
          </p>
          <div className="w-full flex justify-between px-2">
            <Button name="View cart" link="/cart" dark />
            <Button name="Checkout" link="/checkout" />
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
