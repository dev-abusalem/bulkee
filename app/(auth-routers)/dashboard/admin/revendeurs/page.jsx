import RevendeursTable from "@/app/(auth-routers)/components/Revendeurs/RevendeursTable";
import NoCart from "@/app/Shared/NoCart";
import React from "react";

const page = () => {
  const isData = true;

  return (
    <section>
      <div>
        <div>{isData ? <RevendeursTable /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
