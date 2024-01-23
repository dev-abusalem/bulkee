import React from "react";
import { GridLoader, HashLoader, ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <ScaleLoader color="#1f049b" />
    </div>
  );
};

export default Loader;
