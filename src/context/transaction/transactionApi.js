import Cookies from "js-cookie";
import axios from "axios";
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

export const WithdrawInEthAPI = async (amt) => {
  try {
    const response = await api.post(
      `/wallets/withdrawEth/${amt}`,
      {},
      tokenConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const WithdrawInWethAPI = async (data) => {
  try {
    const response = await api.post(
      `${BASE_URL}/wallets/withdrawWeth/${data.amount}`,
      { data },
      tokenConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createChatAPI = async (chatData) => {
  console.log(chatData, "chatData==");
  try {
    const response = await api.post(
      `${BASE_URL}/chat/messages`,
      chatData,
      CreateTokenConfig()
    );
    const responseData = response.data;
    console.log(response, "messklsk");
    if (responseData) {
      return responseData;
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    throw error.response.data;
  }
};
