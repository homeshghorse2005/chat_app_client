// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "production" ? "https://chat-app-server-eosin-tau.vercel.app/api" : "/api",
//   withCredentials: true,
// });




// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// export const axiosInstance = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// });


import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.NODE === "production"
      ? "https://chat-app-server-eosin-tau.vercel.app/api"
      : "http://localhost:5001/api",
  withCredentials: true,
});
