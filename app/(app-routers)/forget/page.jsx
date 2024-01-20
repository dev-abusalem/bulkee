import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import { CircleUserRound, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import msg from "@/public/icons/Message.svg";

const page = () => {
  return (
    <section className=" bg-lightbg h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <form className="p-10 rounded-xl bg-white min-h-[350px] flex justify-between flex-col max-w-md">
          <div className="text-center">
            <Image src={logo} alt="logo" className="w-auto mx-auto" />
            <h3 className="font-semibold my-2 text-xl">
              Activez votre compte <span className="text-primary">Admin</span>
            </h3>
          </div>
          {/**form body start**/}
          <div className=" py-5">
            <div className="relative py-4">
              <Image
                src={msg}
                alt="msg"
                className=" absolute top-1/2 left-3 translate-x-0 text-gray-400 -translate-y-1/2"
              />
              <input
                type="text"
                className="w-full h-[52px] bg-lightbg rounded-md pl-12 outline-none pr-4 font-semibold"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button className="text-white h-[50px] px-10 rounded-xl text-lg">
              Se connecter
            </Button>
          </div>
          {/**form body end**/}
        </form>
      </div>
    </section>
  );
};

export default page;
