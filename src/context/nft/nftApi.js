import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { tokenConfig } from "../auth/authApi";

const BASE_URL = "http://31.220.31.111:3000/api/v1"; // Replace with your actual backend URL

// Set the Axios base URL
axios.defaults.baseURL = BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

const CreateTokenConfig = () => {
  const authToken = Cookies.get("authToken");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: "",
    },
  };

  if (authToken !== null) {
    config.headers["authorization"] = `Bearer ${authToken}`;
  }

  return config;
};

export const getNftsAPI = async () => {
  try {
    const response = await axios.get("/nft", tokenConfig());
    // console.log(response.data, "resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const selectItemAPI = async (productId) => {
  try {
    const response = await axios.get(`/nft/${productId}`, tokenConfig());
    // console.log(response.data.data, "resData");
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const buyNftAPI = async (productId) => {
  try {
    const response = await axios.post(
      `/nft/buyNft/${productId}`,
      tokenConfig()
    );
    // console.log(response.data, "resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createNftAPI = async (nftData) => {
  try {
    const response = await api.post(
      `${BASE_URL}/nft`,
      nftData,
      CreateTokenConfig()
    );
    const responseData = response.data;
    console.log(response);
    if (responseData) {
      console.log(responseData);
      return responseData;
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};
