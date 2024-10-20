import Link from "next/link";
import React from "react";

const Button = ({
  name,
  link,
  dark = false,
}: {
  name: string;
  link: string;
  dark?: boolean;
}) => {
  return (
    <Link
      href={link}
      className={`${
        dark ? "text-white bg-black border-black" : "text-black bg-white"
      } border-[2px] rounded-md px-3 py-2 font-semibold hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300`}
    >
      {name}
    </Link>
  );
};

export default Button;
