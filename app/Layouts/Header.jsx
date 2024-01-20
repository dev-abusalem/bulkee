import React from "react";
import MainNavRoutes from "../Shared/MainNavRoutes";
import MobileNavbar from "../Shared/MobileNavbar";
import Image from "next/image";
import profile from "@/public/icons/profile.svg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <menu className="flex justify-between items-center w-full">
        <div>
          <MobileNavbar />
        </div>
        <div>
          <div className="md:hidden">
            <MainNavRoutes />
          </div>
          <div className="md:block hidden">
            <Link href="#">
              <Image src={profile} alt="profile" width={30} height={30} />
            </Link>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Header;
