import React, { useState, useEffect } from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { transformPieChartData } from "../../api/dataTransformUtils";
import { useStateContext } from "../../contexts/ContextProvider";

const Doughnut = ({ data, typeOptions, numOptions }) => {
  const { currentMode } = useStateContext();

  const [valueType, setValueType] = useState(
    typeOptions && typeOptions[0] ? typeOptions[0] : ""
  );
  const [valueNum, setValueNum] = useState(
    numOptions && numOptions[0] ? numOptions[0] : ""
  );

  const pieChartData = transformPieChartData({
    data: data,
    valType: valueType,
    valNum: valueNum,
  });

  useEffect(() => {
    if (typeOptions && typeOptions[0]) setValueType(typeOptions[0]);
    if (numOptions && numOptions[0]) setValueNum(numOptions[0]);
  }, [typeOptions, numOptions]);

  if (!typeOptions || !numOptions) {
    return null;
  }

  return (
    <>
      <div>
        <select
          name="dropDownValTypeOptions"
          sx={{ marginLeft: 1, width: "12%", mt: 1 }}
          defaultValue={valueType}
          onChange={(e) => {
            setValueType(e.target.value);
          }}
        >
          {typeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <select
          name="dropDownValTypeOptions"
          sx={{ marginLeft: 1, width: "12%", mt: 1 }}
          defaultValue={valueNum}
          onChange={(e) => {
            setValueNum(e.target.value);
          }}
        >
          {numOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div style={{ height: "500px" }}>
        <AccumulationChartComponent
          id="pie-chart"
          legendSettings={{ visible: true, background: "white" }}
          height="500px"
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="id"
              yName="value"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              type="Pie"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: 600,
                  color: "black",
                  size: "12px",
                },
              }}
              marker={{ visible: true, height: 10, width: 10 }}
              animation={{ enable: true }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </>
  );
};

export default Doughnut;
