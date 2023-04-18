import axiosInstance from "./axiosInstance";

// Get partition data
export const fetchPartitionData = async (
  partition_id,
  from_date = "2022-01-01",
  to_date = "2022-12-31",
  optimisation_target = "conversions",
  source = "",
  offset = 0,
  limit = -1
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/data/`,
    {
      params: {
        from_date,
        to_date,
        optimisation_target,
        source,
        offset,
        limit,
      },
    }
  );
  console.log("API response:", response);
  return response.data;
};
