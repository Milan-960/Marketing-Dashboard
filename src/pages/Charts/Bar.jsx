import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  AccumulationLegend,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = ({ data }) => {
  const { currentMode } = useStateContext();

  if (!data) {
    return null;
  }

  // Transform the data to include only the desired fields and their sum
  const transformedData = [
    {
      category: "Attributed Conversions",
      value: data.reduce(
        (accumulator, item) => accumulator + item.attributed_conversions,
        0
      ),
    },
    {
      category: "Attributed Revenue",
      value: data.reduce(
        (accumulator, item) => accumulator + item.attributed_revenue,
        0
      ),
    },
    {
      category: "Spends",
      value: data.reduce((accumulator, item) => accumulator + item.spends, 0),
    },
  ];

  return (
    <div className="m-2 p-2 pb-4 md:m-10 mt-24 md:p-10 bg-gray-200 dark:bg-secondary-dark-bg md:rounded-3xl rounded-xl">
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Data"
              dataSource={transformedData}
              xName="category"
              yName="value"
              type="Pyramid"
              width="45%"
              height="90%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
