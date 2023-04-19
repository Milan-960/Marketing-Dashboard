import React from "react";
import { ChartsHeader, LineChart } from "../../components";
import { transformBarGraphData } from "../../api/dataTransformUtils";

import useData from "../../hooks/useData";

const Line = () => {
  const { data, isLoading, error } = useData(
    "932561105d21a54d3d1d2a941164ffec321cd76b"
  );
  const transformedData = transformBarGraphData(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200">
      <ChartsHeader category="Line" title="Summary statistics" />
      <div className="w-full">
        <LineChart data={transformedData} />
      </div>
    </div>
  );
};

export default Line;
