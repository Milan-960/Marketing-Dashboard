import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = ({ data, width, height }) => {
  const { currentMode } = useStateContext();
  // Only render if the data is visible
  if (!data) {
    return null;
  }

  const prepareSeries = (data) => {
    const series = [
      {
        type: "Line",
        dataSource: data.map((item) => ({
          date: new Date(item.date),
          attributed_conversions: item.attributed_conversions,
        })),
        xName: "date",
        yName: "attributed_conversions",
        name: "Attributed Conversions",
        marker: { visible: true, height: 10, width: 10 },
        animation: { enable: false },
      },
      {
        type: "Line",
        dataSource: data.map((item) => ({
          date: new Date(item.date),
          attributed_revenue: item.attributed_revenue,
        })),
        xName: "date",
        yName: "attributed_revenue",
        name: "Attributed Revenue",
        marker: { visible: true, height: 10, width: 10 },
        animation: { enable: false },
      },
      {
        type: "Line",
        dataSource: data.map((item) => ({
          date: new Date(item.date),
          spends: item.spends,
        })),
        xName: "date",
        yName: "spends",
        name: "Spends",
        marker: { visible: true, height: 10, width: 10 },
        animation: { enable: false },
      },
    ];

    return series;
  };

  return (
    <ChartComponent
      id="line-chart"
      height={height}
      width={width}
      chartArea={{ border: { width: 0 } }}
      tooptip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {prepareSeries(data).map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
