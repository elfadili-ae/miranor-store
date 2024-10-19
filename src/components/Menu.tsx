"use client";

import { MenuLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";

const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);

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
              <Link href={item.href} key={item.name}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
