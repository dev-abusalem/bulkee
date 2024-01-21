"use client";
import React from "react";
import { Layout, Compass } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { adminRoutes, guestRoutes } from "@/app/data/SidebarMenu";
import SidebarAdmin from "./SidebarAdmin";

const Sidebars = () => {
  const user = "admin";
  const pathname = usePathname();
  const isAdminPage = pathname.includes("/admin");
  const routes = guestRoutes;
  const adminroutes = adminRoutes;
  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="mb-2">
        {routes.map((route, index) => {
          return (
            <SidebarItem
              key={index}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
          );
        })}
      </div>
      <hr className="w-full h-[2px] bg-primary opacity-50 " />
      <div className="mt-4">
        {/* {user === "admin" && (
          <p className="mb-2 text-center text-slate-400 underline">
            Admin panel
          </p>
        )} */}
        {user === "admin" &&
          adminroutes.map((route, index) => {
            return (
              <SidebarAdmin
                key={index}
                icon={route.icon}
                label={route.label}
                href={route.href}
                user={user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Sidebars;
