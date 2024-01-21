import React from "react";
import Header from "@/app/Layouts/Header";
import SidebarWrapper from "../components/LeftSidebar/SidebarWrapper";

const page = ({ children }) => {
  return (
    <div className=" bg-lightbg dark:bg-zinc-800 pb-5">
      {/* header section start */}
      <header className="h-[65px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Header />
      </header>
      {/* header section end */}

      {/* sidebar section start */}
      <div className="hidden md:flex h-full w-60 flex-col inset-y-0 fixed z-50">
        <SidebarWrapper />
      </div>
      {/* sidebar section end */}

      {/* main body left section start */}
      <main className="md:pl-60 h-full pt-[65px] bg-lightbg dark:bg-zinc-800">
        <div className="p-4 m-5 relative bg-white dark:bg-zinc-950 min-h-[85vh] shadow-md">
          {children}
        </div>
      </main>
      {/* main body left section end */}
    </div>
  );
};

export default page;
