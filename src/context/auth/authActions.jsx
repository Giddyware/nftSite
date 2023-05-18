import Cookies from "js-cookie";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import {
  createEmailTokenAPI,
  getNftsAPI,
  getUserDetailsRequestAPI,
  loginUserAPI,
  logoutUserAPI,
  registerUserAPI,
} from "./authApi";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const register = (userData) => async (dispatch) => {
//   console.log(userData, "userData");
//   dispatch(authStart());
//   try {
//     const user = await registerUser(userData);
//     console.log(user, "regUser");
//     dispatch(authSuccess(user));
//     <Navigate to="/auth" />;
//     toast.success("Login successful!");
//   } catch (error) {
//     dispatch(authFailure(error));
//   }
// };

// export const loginUser = (userData) => async (dispatch) => {
//   dispatch(authStart());
//   try {
//     const user = await loginUserAPI(userData);
//     console.log(user, "loginUser");
//     Cookies.set("authToken", user.token, { expires: 7 }); // Store the authentication token in a cookie
//     <Navigate to="/dashboard" />;
//     dispatch(authSuccess(user));
//     toast.success("Login Successful");
//   } catch (error) {
//     dispatch(authFailure(error));
//   }
// };

// export const signOut = () => (dispatch) => {
//   Cookies.remove("authToken"); // Remove the authentication token cookie
//   dispatch(logout());
// };

// Register user action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { dispatch }) => {
    dispatch(authStart());
    try {
      const user = await registerUserAPI(userData);
      // dispatch(setUser(user));
      // dispatch(clearError());
      <Navigate to="/auth" />;
      dispatch(authSuccess(user));
      toast.success("Registered Successful");
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { dispatch }) => {
    dispatch(authStart());
    try {
      const user = await loginUserAPI(userData);
      Cookies.set("authToken", user.token, { expires: 1 }); // Store the authentication token in a cookie
      dispatch(authSuccess(user));
      if (user) {
        <Navigate to="/dashboard" />;
        console.log(user, "user");
      }

      toast.success("Login Successful");
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await logoutUserAPI();
      dispatch(logoutUser());
      dispatch(clearError());
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (_, { dispatch }) => {
    try {
      const userDetails = await getUserDetailsRequestAPI();
      // dispatch(setUser(userDetails));
      // dispatch(clearError());
      dispatch(authSuccess(userDetails));
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const createEmailToken = createAsyncThunk(
  "auth/createEmailToken",
  async (_, { dispatch }) => {
    try {
      const email = await createEmailTokenAPI();
      console.log("EMAIL", email);
      dispatch(authSuccess(email));
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

// TODO:Dispatch action to store products
export const getNfts = createAsyncThunk(
  "auth/getProducts",
  async (_, { dispatch }) => {
    try {
      const nfts = await getNftsAPI();
      // Dispatch action to store products
      console.log();
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);
