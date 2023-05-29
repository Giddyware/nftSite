import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  WithdrawInEthAPI,
  WithdrawInWethAPI,
  buyNftAPI,
  createNftAPI,
  getNftsAPI,
  pullFromMarketAPI,
  pushToMarketAPI,
  selectItemAPI,
} from "./nftApi";
import {
  buyProductFailure,
  buyProductStart,
  buyProductSuccess,
  fetchFailure,
  fetchStart,
  fetchSuccess,
  selectItemFailure,
  selectItemStart,
  selectItemSuccess,
} from "./nftSlice";
import { toast } from "react-toastify";

export const getNfts = createAsyncThunk(
  "product/getNfts",
  async (_, { dispatch }) => {
    dispatch(fetchStart());
    try {
      const nfts = await getNftsAPI();
      console.log(nfts, "nfts");
      dispatch(fetchSuccess(nfts));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

export const selectProduct = createAsyncThunk(
  "product/selectProduct",
  async (productId, { dispatch }) => {
    dispatch(selectItemStart());
    try {
      const selected = await selectItemAPI(productId);
      console.log(selected, "selected");
      dispatch(selectItemSuccess(selected));
    } catch (error) {
      dispatch(selectItemFailure(error));
    }
  }
);

export const buyProduct = createAsyncThunk(
  "product/buyProduct",
  async (productId, { dispatch }) => {
    dispatch(buyProductStart());
    try {
      const bought = await buyNftAPI(productId);
      console.log(bought, "bought");
      toast.success("Congratulations🎉, You have successfully bought an NFT", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
      dispatch(buyProductSuccess());
    } catch (error) {
      dispatch(buyProductFailure(error.message));
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
      dispatch(fetchFailure(error));
    }
  }
);

export const pushToMarket = createAsyncThunk(
  "product/pushToMarket",
  async (id, { dispatch }) => {
    try {
      const response = await pushToMarketAPI(id);
      console.log("pushToMarket", response);
      dispatch(fetchSuccess(response));
      toast.success(
        "Congratulations🎉, You have successfully PUSH an NFT to the market. 🚀"
      );
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

export const pullFromMarket = createAsyncThunk(
  "product/pullFromMarket",
  async (id, { dispatch }) => {
    try {
      const response = await pullFromMarketAPI(id);
      console.log("pullFromMarket", response);
      dispatch(fetchSuccess(response));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

export const WithdrawInEth = createAsyncThunk(
  "product/withdrawEth",
  async (amt, { dispatch }) => {
    try {
      const response = await WithdrawInEthAPI(amt);
      console.log(response, "withdrawEth===");
    } catch (error) {
      console.log(error);
    }
  }
);

export const WithdrawInWeth = createAsyncThunk(
  "product/withdrawEth",
  async (amt, { dispatch }) => {
    try {
      const response = await WithdrawInWethAPI(amt);
      console.log(response, "withdrawEth===");
    } catch (error) {
      console.log(error);
    }
  }
);
