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
      const response = await registerUserAPI(userData);
      console.log(response, "response==");
      if (response.status === "success") {
        dispatch(getEmailVerified(response.data.user.emailVerified));
        console.log(response.data.user.emailVerified, "isEmailVerified==");
        localStorage.setItem(
          "isEmailVerified",
          response.data.user.emailVerified
        ); //* Store the emailVerified in the localStorage
        Cookies.set("authToken", response.token, { expires: 0.625 }); // Store the authentication token in a cookie
        dispatch(authSuccess(response));
        toast.success("Registered Successful");
        dispatch(createEmailToken());
        <Navigate to="/verify_email" />;
      }
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

      if (response.status === "success") {
        dispatch(getEmailVerified(response.data.user.emailVerified));
        console.log(response.data.user.emailVerified, "isEmailVerified==");
        localStorage.setItem(
          "isEmailVerified",
          response.data.user.emailVerified
        ); //* Store the emailVerified in the localStorage
        Cookies.set("authToken", response.token, { expires: 0.625 }); // Store the authentication token in a cookie
        dispatch(authSuccess(response.data));

        <Navigate to="/dashboard" />;
        toast.success("Login Successful");
      }
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
      localStorage.removeItem("isEmailVerified");
      Cookies.remove("authToken");
      dispatch(logout());
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
      const response = await createEmailTokenAPI();

      if (response.status === "success") {
        toast.success(
          "Congratulations🎉, You can now check you email to confirm!",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          }
        );
      }
    } catch (error) {
      // dispatch(authFailure(error));
    }
  }
);
