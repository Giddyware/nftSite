// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  isAuthenticated: Cookies.get("authToken") ? true : false,
  isLoading: false,
  isEmailVerified: localStorage.getItem("isEmailVerified")
    ? localStorage.getItem("isEmailVerified")
    : false,
  error: null,
  token: Cookies.get("authToken") ? Cookies.get("authToken") : null,
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
      state.isEmailVerified = false;
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
    getEmailVerified(state, action) {
      state.isEmailVerified = action.payload;
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
  getEmailVerified,
} = authSlice.actions;

export default authSlice.reducer;
