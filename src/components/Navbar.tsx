import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Logo from "./Logo";
import { MenuLinks } from "@/constants/constants";

const Navbar = () => {
  return (
    <div className="relative z-40 h-20 px-4 md:px-8 lg:px-16 flex justify-between items-center drop-shadow-md bg-white">
      {/* mobile */}
      <div className="w-full h-full flex justify-between items-center sm:hidden">
        <Logo />
        <Menu />
      </div>
      {/* large screens */}
      <div className="w-1/3 lg:w-1/2 h-full hidden sm:flex items-center gap-8">
        <Logo />
        <div className="hidden lg:flex gap-4">
          {MenuLinks.map((item, index) => {
            if (item.isNavLink) {
              return (
                <Link
                  className="hover:text-blue-600 hover:animate-bounce"
                  key={`${index}_${item.name}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="w-2/3 lg:w-1/2 h-full hidden sm:flex justify-between gap-4 items-center">
        <SearchBar />
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
