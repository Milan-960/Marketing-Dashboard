import React from "react";
import { ChartsHeader } from "../../components";

import useData from "../../hooks/useData";
import Pyramid from "./Bar";

const PyramidChart = () => {
  const { data, isLoading, error } = useData(
    "932561105d21a54d3d1d2a941164ffec321cd76b"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200">
      <ChartsHeader category="Pyramid" title="Data Pyramid" />
      <div className="w-full">
        <Pyramid data={data} />
      </div>
    </div>
  );
};

export default PyramidChart;
