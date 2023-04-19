import axiosInstance from "./axiosInstance";

// List available partitions
export const fetchPartitions = async (offset = 0, limit = -1) => {
  const response = await axiosInstance.get("/partitions", {
    params: {
      offset,
      limit,
    },
  });
  return response.data;
};

// Get list of sources
export const fetchSources = async (
  partition_id,
  from_date = "2022-01-01",
  to_date = "2022-12-31"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/data/sources`,
    {
      params: {
        from_date,
        to_date,
      },
    }
  );
  return response.data.sources;
};

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
  return response.data;
};

// Get performance report
export const fetchPerformanceReport = async (
  partition_id,
  from_date = "2022-01-01",
  to_date = "2022-12-31",
  optimisation_target = "conversions"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/report/performance`,
    {
      params: {
        from_date,
        to_date,
        optimisation_target,
      },
    }
  );
  return response.data;
};

// Get summary statistics

export const fetchSummaryStatistics = async (
  partition_id = "932561105d21a54d3d1d2a941164ffec321cd76b",
  from_date = "2022-01-01",
  to_date = "2022-12-31",
  optimisation_target = "conversions"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/totals`,
    {
      params: {
        from_date,
        to_date,
        optimisation_target,
      },
    }
  );
  return response.data;
};

// Get revenue
export const fetchRevenue = async (
  partition_id = "932561105d21a54d3d1d2a941164ffec321cd76b"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/totals/revenue`
  );
  return response.data.revenue;
};

// Get conversions
export const fetchConversions = async (
  partition_id,
  from_date = "2022-01-01",
  to_date = "2022-12-31",
  optimisation_target = "conversions"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/totals/conversions`,
    {
      params: {
        from_date,
        to_date,
        optimisation_target,
      },
    }
  );
  return response.data.conversions;
};

// Get spend
export const fetchSpend = async (
  partition_id = "932561105d21a54d3d1d2a941164ffec321cd76b",
  from_date = "2022-01-01",
  to_date = "2022-12-31",
  optimisation_target = "conversions"
) => {
  const response = await axiosInstance.get(
    `/partitions/${partition_id}/totals/spend`,
    {
      params: {
        from_date,
        to_date,
        optimisation_target,
      },
    }
  );
  return response.data.spend;
};
