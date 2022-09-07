import React from "react";
import { AiFillGithub, AiOutlineHome, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="relative">
      <Link href={"/"}>
        <AiOutlineHome className="absolute left-0 w-7 h-7 mt-7 ml-7 cursor-pointer z-10 hover:text-gray-400 text-white" />
      </Link>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/ley-kwan-choo-129678228/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="absolute right-12 w-7 h-7 mt-7 mr-7 cursor-pointer z-10 hover:text-gray-400 text-white" />
        </a>
        <a
          href="https://github.com/Leykwan132/linkedin-no-viewed"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <AiFillGithub className="absolute right-0 w-7 h-7 mt-7 mr-7 cursor-pointer z-10 hover:text-gray-400 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Header;
