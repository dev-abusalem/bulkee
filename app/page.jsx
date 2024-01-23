"use client";
import Image from "next/image";
import logo from "../public/icons/logo.svg";
import { useRouter } from "next/navigation";
export default function Home() {
  return (
    <main className=" bg-lightbg h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <form className="p-10 rounded-xl bg-white min-h-[540px] min-w-[440px]">
          <div className="text-center">
            <Image src={logo} alt="logo" className="w-auto mx-auto" />
            <h3 className="font-semibold my-2 text-xl">
              Activez votre compte <span className="text-primary">Admin</span>
            </h3>
          </div>
          {/**form body start**/}

          {/**form body end**/}
        </form>
      </div>
    </main>
  );
}
