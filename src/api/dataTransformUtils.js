// Data Trans for PieChart
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
