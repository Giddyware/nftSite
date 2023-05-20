import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNftsAPI } from "./nftApi";
import { authFailure } from "../auth/authSlice";
import { fetchFailure, fetchStart, fetchSuccess } from "./nftSlice";

// export const getNfts = createAsyncThunk(
//   "auth/getProducts",
//   async (_, { dispatch }) => {
//     try {
//       const nfts = await getNftsAPI();
//       // Dispatch action to store products

//       console.log(nfts,'nfts');
//     } catch (error) {
//       dispatch(authFailure(error));
//     }
//   }
// );

export const getNfts = createAsyncThunk(
  "product/getNfts",
  async (_, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const nfts = await getNftsAPI();
      // Dispatch action to store products

      console.log(nfts, "nftsjs");
      dispatch(fetchSuccess(nfts));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

// export const getNfts = createAsyncThunk(
//   "product/getNfts",
//   async (_, thunkAPI) => {
//     try {
//       const response = await getNftsAPI();
//       console.log(response.data, "respo");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

