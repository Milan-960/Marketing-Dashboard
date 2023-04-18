import axios from "axios";

const API_BASE_URL = "https://demo-api.adtriba.app/v1/api";
const API_KEY = "woope1Pei5zieg";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export default axiosInstance;
