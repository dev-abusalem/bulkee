import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import plus from "@/public/icons/fi_plus.svg";
import nocart from "@/public/images/nocart.svg";
const NoCart = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="max-w-sm p-6 bg-white text-primary text-center rounded-md">
        <Image src={nocart} alt="nocart" className="mx-auto" />
        <h2 className="mt-2 font-semibold text-xl text-black">Aucune marque</h2>
        <p className="mt-2 leading-4 text-zinc-400">
          Vous n’avez encore jamais ajouté de marque sur la plateforme.
        </p>
        <Button className="text-white mt-4 rounded-xl px-6">
          <Image src={plus} alt="plus" className=" inline-block mr-2 " />
          Marque
        </Button>
      </div>
    </div>
  );
};

export default NoCart;
