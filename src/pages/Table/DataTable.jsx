import React from "react";

import { v4 as uuid } from "uuid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

// Tool tip for data table
const renderTooltip = (params) => (
  <Tooltip title={params.value}>
    <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
      {params.value}
    </div>
  </Tooltip>
);

const DataTable = ({ data }) => {
  const { currentMode } = useStateContext();

  const columns = [
    { field: "date", headerName: "Date", flex: 0.5, renderCell: renderTooltip },
    {
      field: "source",
      headerName: "Advertising Source",
      align: "center",
      flex: 1,
      renderCell: renderTooltip,
    },
    {
      field: "attributed_conversions",
      headerName: "Attributed Conversions",
      type: "number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "attributed_revenue",
      headerName: "Attributed Revenue",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.5,
      renderCell: renderTooltip,
    },
    {
      field: "spends",
      headerName: "Total Spent on Advertising",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "partition_id",
      headerName: "Partition ID",
      flex: 1,
    },
    {
      field: "optimisation_target",
      headerName: "Optimisation Target",
      flex: 0.75,
      renderCell: renderTooltip,
    },
  ];

  // check if data is undefined or empty
  if (!data || data.length === 0) {
    return <div>No data to display.</div>;
  }

  const rowsWithUuid = data.map((row) => ({ ...row, id: uuid() }));

  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 pb-4 md:p-10 bg-gray-200 md:rounded-3xl rounded-xl"
      style={{
        backgroundColor: currentMode === "Dark" ? "rgb(145 157 176)" : "#fff",
      }}
    >
      <Header title="Data Table" />

      <div className="data-table-container">
        <DataGrid
          rows={rowsWithUuid}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
};

export default DataTable;
