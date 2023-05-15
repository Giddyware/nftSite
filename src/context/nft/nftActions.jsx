import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNftsAPI } from "./nftApi";
import { authFailure } from "../auth/authSlice";

export const getNfts = createAsyncThunk(
  "auth/getProducts",
  async (_, { dispatch }) => {
    try {
      const nfts = await getNftsAPI();
      // Dispatch action to store products
      console.log(nfts,'nfts');
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);
