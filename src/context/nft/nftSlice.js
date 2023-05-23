import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNftsAPI } from "./nftApi";

const initialState = {
  nfts: [],
  isLoading: false,
  error: null,
  nft: null,
  selectedItem: null,
};

const nftSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.nfts = action.payload;
      state.error = null;
    },
    fetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    buyProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    buyProductSuccess(state) {
      state.loading = false;
    },
    buyProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  buyProductStart,
  buyProductSuccess,
  buyProductFailure,
} = nftSlice.actions;

export default nftSlice.reducer;
