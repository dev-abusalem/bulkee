import Image from "next/image";
import React from "react";
import Sidebars from "./Sidebars/Sidebars";
import logo from "@/public/icons/logo.svg";
const SidebarWrapper = () => {
  return (
    <div className="flex flex-col shadow-sm overflow-y-auto bg-white h-screen ">
      <div className="px-8 py-4">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex flex-col w-full py-3 px-8">
        <Sidebars />
      </div>
    </div>
  );
};

export default SidebarWrapper;
