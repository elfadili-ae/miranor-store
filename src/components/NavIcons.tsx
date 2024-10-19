"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfileIcon = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setOpenCart(false);
    setOpenProfileMenu((prev) => !prev);
  };

  const handleCartIcon = () => {
    setOpenProfileMenu(false);
    setOpenCart((prev) => !prev);
  };

  return (
    <div className="flex gap-4 relative">
      <Image
        src="/profile.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={useCallback(() => {
          handleProfileIcon();
        }, [])}
      />
      {openProfileMenu && (
        <div className="absolute top-8 right-0 w-32 flex flex-col gap-3 py-4 rounded-md bg-black drop-shadow-lg">
          <Link
            href="/profile"
            className="text-white hover:bg-white hover:text-black pl-4"
          >
            Profile
          </Link>
          <Link
            href="/logout"
            className="text-white hover:bg-white hover:text-black pl-4"
          >
            Logout
          </Link>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notifications"
        width={28}
        height={28}
        className="cursor-pointer"
      />
      <div
        className="relative"
        onClick={useCallback(() => {
          handleCartIcon();
        }, [])}
      >
        <Image
          src="/cart.png"
          alt="shopping cart"
          width={28}
          height={28}
          className="cursor-pointer"
        />
        <div className="absolute w-5 aspect-square -top-2 -right-3 rounded-full bg-redish text-sm text-white text-center">
          2
        </div>
      </div>

      {openCart && <CartModal />}
    </div>
  );
};

export default NavIcons;
