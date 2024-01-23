import ProductsTable from "@/app/(auth-routers)/components/Products/ProductsTable";
import NoCart from "@/app/Shared/NoCart";
import React from "react";

const page = () => {
  const isData = true;

  return (
    <section>
      <div>
        <div>{isData ? <ProductsTable /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
