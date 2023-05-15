// authApi.js
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://31.220.31.111:3000/api/v1"; // Replace with your actual backend URL

// Set the Axios base URL
axios.defaults.baseURL = BASE_URL;

// Request interceptor
const authToken = Cookies.get("authToken"); // Retrieve the authToken from cookies
axios.interceptors.request.use((config) => {
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`; // Add the authToken to the request headers
    console.log(authToken, "authToken");
  }
  return config;
});

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized or expired token response
    if (error.response && error.response.status === 401) {
      // Redirect the user to the login page or perform any other action
      console.log("Unauthorized or expired token");
    }
    return Promise.reject(error);
  }
);

const api = axios.create({
  baseURL: BASE_URL,
});

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
// if (authToken) {
//   config.headers["Authorization"] = `Bearer ${authToken}`;
// }

export const registerUserAPI = async (userData) => {
  try {
    const response = await api.post(`${BASE_URL}/users/signup`, userData);
    const responseData = response.data;

    if (responseData) {
      console.log(responseData);
      return responseData;
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.log(error.response?.data);
    throw error.response?.data;
  }
};

export const loginUserAPI = async (userData) => {
  try {
    const response = await api.post(`${BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    if (error.isAxiosError && !error.response) {
      throw new Error("Network Error: Please check your internet connection.");
    }
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};

export const logoutUserAPI = async () => {
  try {
    const response = await api.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const tokenConfig = () => {
  const authToken = Cookies.get("authToken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "",
    },
  };
  if (authToken !== null) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }

  return config;
};

export const getUserDetailsRequestAPI = async () => {
  try {
    const response = await api.get("/users/myDetails", tokenConfig());
    console.log(response.data, "userDetails");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createEmailTokenAPI = async () => {
  try {
    const response = await api.patch("/createEmailToken");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getNftsAPI = async () => {
  try {
    const response = await api.get("/nft");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
