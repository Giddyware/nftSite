import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNftsAPI } from "./nftApi";

const initialState = {
  nfts: [],
  isLoading: false,
  error: null,
};

export const getNfts = createAsyncThunk(
  "product/getNfts",
  async (_, thunkAPI) => {
    try {
      const response = await getNftsAPI();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const nftSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNfts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNfts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getNfts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default nftSlice.reducer;
