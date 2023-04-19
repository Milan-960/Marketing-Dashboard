import React from "react";
import { ChartsHeader, Doughnut as PieChart } from "../../components";

import useData from "../../hooks/useData";

const Pie = () => {
  const { data, isLoading, error, typeOptions, numOptions } = useData(
    "932561105d21a54d3d1d2a941164ffec321cd76b"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200">
        <ChartsHeader category="Pie" title="Source" />
        <div className="w-full">
          <PieChart
            data={data}
            typeOptions={typeOptions}
            numOptions={numOptions}
            legendVisibility
            height="full"
          />
        </div>
      </div>
    </>
  );
};

export default Pie;
