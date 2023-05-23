import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNftAPI, getNftsAPI } from "./nftApi";
import { fetchFailure, fetchStart, fetchSuccess } from "./nftSlice";
import { toast } from "react-toastify";



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

// createNft  action
export const createNft = createAsyncThunk(
  "product/createNft",
  async (nftData, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const nft = await createNftAPI(nftData);
      console.log(nft, nft);

      dispatch(fetchSuccess(nft));
      toast.success("Minting Successful");
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);
