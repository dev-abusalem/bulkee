"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const SidebarAdmin = ({ icon: Icon, label, href }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") ||
    pathname === href ||
    pathname?.startsWith(`/${href}`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center w-full gap-x-2 mb-2 rounded-xl  text-black hover:bg-blue-100 text-sm  pl-6 transition-all hover:text-slate-600 ",
          isActive &&
            "text-white bg-primary hover:bg-primary hover:text-white hover:opacity-85 transition-all"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Image
            src={Icon}
            alt={label}
            width={25}
            height={25}
            className={cn("text-slate-500", isActive && "text-white")}
          />
          {label}
        </div>
      </button>
    </>
  );
};

export default SidebarAdmin;
