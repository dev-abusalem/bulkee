import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import msg from "@/public/icons/Message.svg";
import lock from "@/public/icons/Lock.svg";
import {
  CircleUser,
  CircleUserRound,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <section className=" bg-lightbg h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <form className="p-10 rounded-xl bg-white min-h-[500px] flex justify-between flex-col max-w-md">
          <div className="text-center">
            <Image src={logo} alt="logo" className="w-auto mx-auto" />
            <h3 className="font-semibold my-2 text-xl">
              Connexion à votre espace{" "}
              <span className="text-primary">personnel</span>
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
                type="email"
                placeholder="example@compay.com"
                className="w-full h-[52px] bg-lightbg rounded-md pl-12 outline-none pr-4 font-semibold"
              />
            </div>
            <div className="relative py-4">
              <Image
                src={lock}
                alt="lock"
                className=" absolute top-1/2 left-3 translate-x-0 text-gray-400 -translate-y-1/2"
              />
              <input
                type="password"
                placeholder="************"
                className="w-full h-[52px] bg-lightbg rounded-md pl-12 outline-none pr-4 font-semibold"
              />
              <span className=" absolute top-1/2 right-5 translate-x-1/2 text-gray-400 -translate-y-3">
                {/*<Eye />*/}
                <EyeOff />
              </span>
            </div>
            <div>
              <Link href="/register" className="text-primary text-sm underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
          {/**form body end**/}
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
