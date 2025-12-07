// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });



import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
