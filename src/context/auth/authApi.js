// authApi.js
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://alphapp.tech/api/v1"; // Replace with your actual backend URL

// Set the Axios base URL
axios.defaults.baseURL = BASE_URL;

// Request interceptor
const authToken = Cookies.get("authToken"); // Retrieve the authToken from cookies
axios.interceptors.request.use((config) => {
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`; // Add the authToken to the request headers
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

export const registerUserAPI = async (userData) => {
  try {
    const response = await api.post(`${BASE_URL}/users/signup`, userData);
    const responseData = response.data;

    if (responseData) {
      return responseData;
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    throw error.response?.data;
  }
};

export const loginUserAPI = async (userData) => {
  try {
    const response = await api.post("/users/login", userData);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUserAPI = async () => {
  try {
    const response = await api.post(`${BASE_URL}/users/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const forgotPasswordAPI = async (email) => {
  try {
    const response = await api.post(`${BASE_URL}/users/forgotPassword`, email);
    console.log(response, "response");
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
      authorization: "",
    },
  };
  if (authToken !== null) {
    config.headers["authorization"] = `Bearer ${authToken}`;
  }

  return config;
};

export const getUserDetailsRequestAPI = async () => {
  try {
    const response = await api.get("/users/myDetails", tokenConfig());

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProfilePicAPI = async (photo) => {
  try {
    const response = await api.patch(`/users/myDetails`, photo, tokenConfig());
    console.log(response, "responseApi");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updatePasswordAPI = async (data) => {
  try {
    const response = await api.patch(
      `/users/chaingeMyPassword`,
      data,
      tokenConfig()
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createEmailTokenAPI = async () => {
  try {
    const response = await api.patch(
      "/users/createEmailToken",
      {},
      tokenConfig()
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getNftsAPI = async () => {
  try {
    const response = await api.get("/nft");

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
