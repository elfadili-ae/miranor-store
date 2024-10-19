import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const CartModal = () => {
  const isEmpty = false;

  return (
    <div className="absolute w-64 right-0 top-8 bg-black flex flex-col py-3 rounded-md">
      {isEmpty ? (
        <p>The cart is empty</p>
      ) : (
        <>
          <h3 className="w-full text-white font-semibold mb-2 p-1 text-center border-b-2 border-white">
            Shopping Cart
          </h3>
          <div className="w-full flex flex-col gap-1 mb-2 p-1">
            <div className="flex gap-1 bg-white rounded-sm px-1 py-1">
              <Image
                className="rounded-md object-cover"
                src="/product.png"
                alt="product"
                height={44}
                width={44}
              />
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <Link href="/products/" className="font-semibold">
                    productName
                  </Link>
                  <p className="font-semibold">$5.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="">
                    <span className="text-xs">Quantity: </span>2
                  </p>
                  <button className="text-red-500">Remove</button>
                </div>
              </div>
            </div>
            <div className="flex gap-1 bg-white rounded-sm px-1 py-1">
              <Image
                className="rounded-md object-cover"
                src="/product.png"
                alt="product"
                height={44}
                width={44}
              />
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <p className="font-semibold">productName</p>
                  <p className="font-semibold">$5.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="">
                    <span className="text-xs">Quantity: </span>2
                  </p>
                  <button className="text-red-500">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between font-bold px-2">
            <p className="text-white">Subtotal</p>
            <p className="text-white">$11.99</p>
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
