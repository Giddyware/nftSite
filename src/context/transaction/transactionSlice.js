import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  response: null,
  chat: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    },
    fetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchChatStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchChatSuccess: (state, action) => {
      state.isLoading = false;
      state.chat = action.payload;
      state.error = null;
    },
    fetchChatFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  fetchChatStart,
  fetchChatSuccess,
  fetchChatFailure,
} = transactionSlice.actions;

export default transactionSlice.reducer;
