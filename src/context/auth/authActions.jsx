import Cookies from "js-cookie";
import {
  authStart,
  authSuccess,
  authFailure,
  logout,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getEmailVerified,
} from "./authSlice";
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

// Register user action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { dispatch }) => {
    dispatch(authStart());
    try {
      const user = await registerUserAPI(userData);
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
      const response = await loginUserAPI(userData);
      console.log(response.data.user.emailVerified, "res==jkds=");
      dispatch(getEmailVerified(response.data.user.emailVerified));
      localStorage.setItem("isEmailVerified", response.data.user.emailVerified);
      Cookies.set("authToken", response.token, { expires: 0.625 }); // Store the authentication token in a cookie
      dispatch(authSuccess(response.data));

      <Navigate to="/dashboard" />;
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
      dispatch(logout());
      // dispatch(clearError());
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (_, { dispatch }) => {
    try {
      dispatch(getUserDetailsStart());
      const response = await getUserDetailsRequestAPI();
      console.log(response, "response==");
      dispatch(getUserDetailsSuccess(response.data));
    } catch (error) {
      dispatch(getUserDetailsFailure(error.message));
    }
  }
);

export const createEmailToken = createAsyncThunk(
  "auth/createEmailToken",
  async (_, { dispatch }) => {
    try {
      const email = await createEmailTokenAPI();
      console.log("EMAIL", email);
      // dispatch(authSuccess(email));
      toast.success(
        "Congratulations🎉, You can now check you email to confirm!"
      );
    } catch (error) {
      // dispatch(authFailure(error));
    }
  }
);
