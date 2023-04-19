export const transformBarGraphData = (data, startDate, endDate) => {
  const filteredData =
    startDate && endDate
      ? data.filter((item) => {
          return (
            new Date(item.date) >= new Date(startDate) &&
            new Date(item.date) <= new Date(endDate)
          );
        })
      : data;
  const map = filteredData.reduce((acc, val) => {
    acc[val.date] = {
      ...acc[val.date],
      ...val,
      attributed_conversions:
        (parseInt(acc[val.date]?.attributed_conversions) || 0) +
        parseInt(val.attributed_conversions),
      attributed_revenue:
        (parseInt(acc[val.date]?.attributed_revenue) || 0) +
        parseInt(val.attributed_revenue),
      spends: (parseInt(acc[val.date]?.spends) || 0) + parseInt(val.spends),
    };

    return acc;
  }, {});

  const result = Object.values(map);
  return result;
};

// dataTransformUtils.js

export const transformPieChartData = ({ data, valType, valNum }) => {
  const map = data.reduce((acc, val) => {
    acc[val[valType]] = {
      ...acc[val[valType]],
      ...val,
      value: parseFloat(
        ((acc[val[valType]]?.value || 0) + parseFloat(val[valNum])).toFixed(2)
      ),
      id: val[valType],
    };

    return acc;
  }, {});

  const result = Object.values(map);
  return result;
};
