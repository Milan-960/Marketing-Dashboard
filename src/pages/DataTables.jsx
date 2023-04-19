import React from "react";
import useData from "../hooks/useData";
import DataTable from "./Table/DataTable";

const DataTables = () => {
  const { data, isLoading, error } = useData(
    "932561105d21a54d3d1d2a941164ffec321cd76b"
  );

  console.log("DataTable", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default DataTables;
