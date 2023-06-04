import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getNftsAPI } from "./nftApi";

const initialState = {
  nfts: [],
  isLoading: false,
  error: null,
  nft: null,
  selectedItem: null,
  categories: [],
  art: [],
  gaming: [],
  membership: [],
  pfps: [],
  photography: [],
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

    // BUY NFT
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

    // SELECT NFT
    selectItemStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    selectItemSuccess: (state, action) => {
      state.selectedItem = action.payload;
      state.loading = false;
      state.error = null;
    },
    selectItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // FETCH NFT FOR THE HOMEPAGE
    fetchCategoryStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCategorySuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    },
    fetchCategoryFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH ART CATEGORY
    fetchArtStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchArtSuccess: (state, action) => {
      state.isLoading = false;
      state.art = action.payload;
      state.error = null;
    },
    fetchArtFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH GAMING CATEGORY
    fetchGamingStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchGamingSuccess: (state, action) => {
      state.isLoading = false;
      state.gaming = action.payload;
      state.error = null;
    },
    fetchGamingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH MEMBERSHIP CATEGORY
    fetchMembershipStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchMembershipSuccess: (state, action) => {
      state.isLoading = false;
      state.membership = action.payload;
      state.error = null;
    },
    fetchMembershipFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH PFPS CATEGORY
    fetchPfpsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPfpsSuccess: (state, action) => {
      state.isLoading = false;
      state.pfps = action.payload;
      state.error = null;
    },
    fetchPfpsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH PHOTOGRAPH CATEGORY
    fetchPhotographyStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPhotographySuccess: (state, action) => {
      state.isLoading = false;
      state.photography = action.payload;
      state.error = null;
    },
    fetchPhotographyFailure: (state, action) => {
      state.isLoading = false;
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
  selectItemStart,
  selectItemSuccess,
  selectItemFailure,
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFailure,
  fetchArtStart,
  fetchArtSuccess,
  fetchArtFailure,
  fetchGamingStart,
  fetchGamingSuccess,
  fetchGamingFailure,
  fetchMembershipStart,
  fetchMembershipSuccess,
  fetchMembershipFailure,
  fetchPfpsStart,
  fetchPfpsSuccess,
  fetchPfpsFailure,
  fetchPhotographyStart,
  fetchPhotographySuccess,
  fetchPhotographyFailure,
} = nftSlice.actions;

export default nftSlice.reducer;
