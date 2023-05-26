// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,
  userDetails: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    getUserDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserDetailsSuccess(state, action) {
      state.loading = false;
      state.userDetails = action.payload;
    },
    getUserDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getUserDetailsFailure,
} = authSlice.actions;

export default authSlice.reducer;
