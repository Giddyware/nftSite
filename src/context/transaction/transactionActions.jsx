import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  WithdrawInEthAPI,
  WithdrawInWethAPI,
  createChatAPI,
} from "./transactionApi";
import {
  fetchChatFailure,
  fetchChatStart,
  fetchChatSuccess,
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "./transactionSlice";

export const WithdrawInEth = createAsyncThunk(
  "transaction/withdrawEth",
  async (amt, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const response = await WithdrawInEthAPI(amt);
      console.log(response, "withdrawEth===");

      dispatch(fetchSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(fetchFailure(error));
    }
  }
);

export const WithdrawInWeth = createAsyncThunk(
  "transaction/withdrawWeth",
  async (data, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const response = await WithdrawInWethAPI(data);
      // console.log(response, "withdrawEth===");
      if (response?.status == "error") {
        toast.error(`${response?.message}🎉`);
      }
      dispatch(fetchSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(fetchFailure(error));
    }
  }
);

//* createChat  action
export const createChat = createAsyncThunk(
  "product/createNft",
  async (chatData, { dispatch }) => {
    dispatch(fetchChatStart());
    try {
      const chat = await createChatAPI(chatData);

      dispatch(fetchChatSuccess(chat));
    } catch (error) {
      dispatch(fetchChatFailure(error));
    }
  }
);
