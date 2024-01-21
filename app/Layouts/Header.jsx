import React from "react";
import MainNavRoutes from "../Shared/MainNavRoutes";
import MobileNavbar from "../Shared/MobileNavbar";
import Image from "next/image";
import profile from "@/public/icons/profile.svg";
import Link from "next/link";
import DarkMode from "./DarkMode";
const Header = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white dark:bg-zinc-950 shadow-sm">
      <menu className="flex justify-between items-center w-full">
        <div>
          <MobileNavbar />
        </div>
        <div>
          <div className="md:hidden">
            <MainNavRoutes />
          </div>
          <div className="flex justify-end items-center gap-3 ">
            <DarkMode />
            <Image
              src={profile}
              alt="profile"
              width={28}
              height={28}
              className=" cursor-pointer"
            />
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Header;
