import NoCart from "@/app/Shared/NoCart";
import React from "react";
import MarquesTable from "../../components/Marques/MarquesTable";

const page = () => {
  const isData = true;
  return (
    <section>
      <div>
        <div>{isData ? <MarquesTable /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
