import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  buyNftAPI,
  createNftAPI,
  getArtNftsAPI,
  getCategoryAPI,
  getGamingNftsAPI,
  getMembershipNftsAPI,
  getNftsAPI,
  getPfpsNftsAPI,
  getPhotographyNftsAPI,
  pullFromMarketAPI,
  pushToMarketAPI,
  selectItemAPI,
} from "./nftApi";
import {
  buyProductFailure,
  buyProductStart,
  buyProductSuccess,
  fetchArtFailure,
  fetchArtStart,
  fetchArtSuccess,
  fetchCategoryFailure,
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchFailure,
  fetchGamingFailure,
  fetchGamingStart,
  fetchGamingSuccess,
  fetchMembershipFailure,
  fetchMembershipStart,
  fetchMembershipSuccess,
  fetchPfpsFailure,
  fetchPfpsStart,
  fetchPfpsSuccess,
  fetchPhotographyFailure,
  fetchPhotographyStart,
  fetchPhotographySuccess,
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

      toast.success("Congratulations🎉, You have successfully bought an NFT", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
      dispatch(buyProductSuccess());
      console.log(bought, "buyPro===");
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

      dispatch(fetchSuccess(nft));
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
      // const state = getState().auth.userDetails.myNft;

      toast.success(
        "Congratulations🎉, You have successfully PUSH an NFT to the market. 🚀"
      );
      dispatch(fetchSuccess(state));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

export const pullFromMarket = createAsyncThunk(
  "product/pullFromMarket",
  async (id, { dispatch, getState }) => {
    const state = getState().auth.userDetails.myNft;
    const newState = state.map((detail) =>
      detail.id == id
        ? { ...detail, nftInMarket: !detail.nftInMarket }
        : { ...detail }
    );
    try {
      const response = await pullFromMarketAPI(id);

      toast.success("You have successfully PULL an NFT from the market. 🎉");
      dispatch(fetchSuccess(response));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }
);

// export const WithdrawInEth = createAsyncThunk(
//   "product/withdrawEth",
//   async (amt, { dispatch }) => {
//     try {
//       const response = await WithdrawInEthAPI(amt);
//       console.log(response, "withdrawEth===");
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const WithdrawInWeth = createAsyncThunk(
//   "product/withdrawEth",
//   async (amt, { dispatch }) => {
//     try {
//       const response = await WithdrawInWethAPI(amt);
//       console.log(response, "withdrawEth===");
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const getCategory = createAsyncThunk(
  "product/getCategory",
  async (category, { dispatch }) => {
    dispatch(fetchCategoryStart());
    try {
      const cate = await getCategoryAPI(category);

      dispatch(fetchCategorySuccess(cate));
    } catch (error) {
      dispatch(fetchCategoryFailure(error));
    }
  }
);

export const getArtCategory = createAsyncThunk(
  "product/getArtCategory",
  async (_, { dispatch }) => {
    dispatch(fetchArtStart());
    try {
      const response = await getArtNftsAPI();

      dispatch(fetchArtSuccess(response));
    } catch (error) {
      dispatch(fetchArtFailure(error));
    }
  }
);
export const getGamingCategory = createAsyncThunk(
  "product/getGamingCategory",
  async (_, { dispatch }) => {
    dispatch(fetchGamingStart());
    try {
      const response = await getGamingNftsAPI();

      dispatch(fetchGamingSuccess(response));
    } catch (error) {
      dispatch(fetchGamingFailure(error));
    }
  }
);

export const getMembershipCategory = createAsyncThunk(
  "product/getMembershipCategory",
  async (_, { dispatch }) => {
    dispatch(fetchMembershipStart());
    try {
      const response = await getMembershipNftsAPI();

      dispatch(fetchMembershipSuccess(response));
    } catch (error) {
      dispatch(fetchMembershipFailure(error));
    }
  }
);

export const getPfpsCategory = createAsyncThunk(
  "product/getPfpsCategory",
  async (_, { dispatch }) => {
    dispatch(fetchPfpsStart());
    try {
      const response = await getPfpsNftsAPI();

      dispatch(fetchPfpsSuccess(response));
    } catch (error) {
      dispatch(fetchPfpsFailure(error));
    }
  }
);
export const getPhotographyCategory = createAsyncThunk(
  "product/getPhotographyCategory",
  async (_, { dispatch }) => {
    dispatch(fetchPhotographyStart());
    try {
      const response = await getPhotographyNftsAPI();

      dispatch(fetchPhotographySuccess(response));
    } catch (error) {
      dispatch(fetchPhotographyFailure(error));
    }
  }
);
