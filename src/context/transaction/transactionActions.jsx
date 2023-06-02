import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { WithdrawInEthAPI, WithdrawInWethAPI } from "./transactionApi";
import { fetchFailure, fetchStart, fetchSuccess } from "./transactionSlice";

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
  "transaction/withdrawEth",
  async (amt, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const response = await WithdrawInWethAPI(amt);
      console.log(response, "withdrawEth===");
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
