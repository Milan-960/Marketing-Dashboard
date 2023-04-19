import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const useData = (partition_id) => {
  const [data, setData] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const numOptions = ["attributed_conversions", "attributed_revenue", "spends"];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(
          `/partitions/${partition_id}/data/`,
          {}
        );
        const formattedData = response.data.map((row) => {
          return {
            ...row,
            attributed_conversions: parseFloat(row.attributed_conversions),
            attributed_revenue: parseFloat(row.attributed_revenue),
            spends: parseFloat(row.spends),
          };
        });
        setData(formattedData);
        setTypeOptions([
          "source",
          "optimisation_target",
          "type",
          "partition_id",
        ]);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [partition_id]);

  return { data, isLoading, error, typeOptions, numOptions };
};

export default useData;
