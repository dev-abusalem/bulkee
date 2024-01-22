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
          "flex items-center w-full gap-x-2 mb-2 rounded-xl  text-black hover:bg-blue-100 dark:bg-blue-100 text-sm  pl-6 transition-all hover:text-slate-600 ",
          isActive &&
            "text-white bg-primary hover:bg-primary hover:text-white hover:opacity-85 dark:bg-primary transition-all"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={23}
            className={cn("text-black", isActive && " text-white")}
          />
          {label}
        </div>
      </button>
    </>
  );
};

export default SidebarAdmin;
