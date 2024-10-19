import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold uppercase tracking-wide flex items-center"
    >
      <Image
        src="/logo.png"
        alt="Miranor store logo"
        width={32}
        height={32}
        className="hidden sm:flex sm:mr-2"
      />
      Miranor Store
    </Link>
  );
};

export default Logo;
