import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { tokenConfig } from "../auth/authApi";

const BASE_URL = "https://alphapp.tech/api/v1"; // Replace with your actual backend URL

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
    // const response = await axios.get("/nft?nftInMarket=true", tokenConfig());
    const response = await axios.get(
      "/nft?sort=-priceInEtherium",
      tokenConfig()
    );
    // console.log(response.data, "resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getArtNftsAPI = async () => {
  try {
    const response = await api.get(
      `${BASE_URL}/nft?category=arts&sort=-priceInEtherium`,
      tokenConfig()
    );
    console.log(response.data, "==resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getGamingNftsAPI = async () => {
  try {
    const response = await api.get(
      `${BASE_URL}/nft?category=gaming&sort=-priceInEtherium`,
      tokenConfig()
    );
    console.log(response.data, "===resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getMembershipNftsAPI = async () => {
  try {
    const response = await api.get(
      `${BASE_URL}/nft?category=membership&sort=-priceInEtherium`,
      tokenConfig()
    );
    console.log(response.data, "===resData");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const selectItemAPI = async (productId) => {
  try {
    const response = await api.get(
      `${BASE_URL}/nft/${productId}`,
      tokenConfig()
    );
    // console.log(response.data.data, "resData");
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const buyNftAPI = async (productId) => {
  try {
    const response = await api.post(
      `${BASE_URL}/nft/buyNft/${productId}`,
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

export const pushToMarketAPI = async (productId) => {
  try {
    const response = await api.patch(
      `${BASE_URL}/nft/pushNftToMarket/${productId}`,
      {},
      tokenConfig()
    );
    console.log(response, "pushToMarket");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const pullFromMarketAPI = async (productId) => {
  try {
    const response = await api.patch(
      `${BASE_URL}/nft/pullNftFromMarket/${productId}`,
      {},
      tokenConfig()
    );
    console.log(response, "pullFromMarket");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const WithdrawInEthAPI = async (amt) => {
  try {
    const response = await api.patch(
      `${BASE_URL}/wallets/withdrawEth/${amt}`,
      {},
      tokenConfig()
    );
    console.log(response);
  } catch (error) {
    throw error.response.data;
  }
};
export const WithdrawInWethAPI = async (amt) => {
  try {
    const response = await api.patch(
      `${BASE_URL}/wallets/withdrawWeth/${amt}`,
      {},
      tokenConfig()
    );
    console.log(response);
  } catch (error) {
    throw error.response.data;
  }
};

export const getCategoryAPI = async (category) => {
  try {
    const response = await axios.get(
      `/nft/unProtectedNft?category=${category}&sort=-priceInEtherium&limit=20`,
      tokenConfig()
    );
    console.log(response, "resData");
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
