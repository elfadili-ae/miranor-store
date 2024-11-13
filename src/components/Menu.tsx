"use client";

import { MenuLinks } from "@/constants/constants";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Menu = () => {
  const wixClient = useWixClient();
  const [isMenu, setIsMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensure this runs only on the client
    setIsLoggedIn(wixClient.auth.loggedIn());
    // setIsHydrated(true);
  }, [wixClient.auth.loggedIn()]);

  const handleLogout = async () => {
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    router.push(logoutUrl);
  };

  const hideMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className="sm:hidden ">
      <Image
        src="/menu.png"
        alt="Menu button"
        height={32}
        width={32}
        onClick={useCallback(() => setIsMenu((prev) => !prev), [])}
      />
      <div
        className={`${
          isMenu ? "flex flex-col" : "hidden"
        } absolute w-full h-[calc(100vh-80px)] top-20 left-0 bg-black text-white`}
      >
        <div className="w-fdivl h-full flex flex-col gap-4 text-xl justify-center items-center">
          {MenuLinks.map((item: { name: string; href: string }) => {
            return (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => {
                  hideMenu();
                }}
              >
                {item.name}
              </Link>
            );
          })}
          {isLoggedIn ? (
            <button
              onClick={() => {
                hideMenu();
                handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => {
                hideMenu();
              }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
