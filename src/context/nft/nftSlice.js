import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNftsAPI } from "./nftApi";

const initialState = {
  nfts: [],
  isLoading: false,
  error: null,
};

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
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getNfts.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(getNfts.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.nfts = action.payload;
  //       state.error = null;
  //     })
  //     .addCase(getNfts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { fetchStart, fetchSuccess, fetchFailure } = nftSlice.actions;

export default nftSlice.reducer;
