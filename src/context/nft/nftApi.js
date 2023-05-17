import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { tokenConfig } from "../auth/authApi";

const BASE_URL = "http://31.220.31.111:3000/api/v1"; // Replace with your actual backend URL

// Set the Axios base URL
axios.defaults.baseURL = BASE_URL;

// // Request interceptor
// axios.interceptors.request.use((config) => {
//   const authToken = Cookies.get("authToken"); // Retrieve the authToken from cookies
//   console.log(authToken, "authToken");
//   if (authToken) {
//     config.headers.Authorization = `Bearer ${authToken}`; // Add the authToken to the request headers
//     console.log(authToken, "authToken");
//   }
//   return config;
// });

// // Response interceptor
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle unauthorized or expired token response
//     if (error.response && error.response.status === 401) {
//       // Redirect the user to the login page or perform any other action
//       Navigate("/auth");
//       console.log("Unauthorized or expired token");
//     }
//     return Promise.reject(error);
//   }
// );

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// export const getNftsAPI = async () => {

//   try {
//     const response = await api.get("/nft");
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const getNftsAPI = async () => {
  try {
    const response = await axios.get("/nft", tokenConfig());
    console.log(response.data, "resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
