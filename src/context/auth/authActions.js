import Cookies from "js-cookie";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import { loginUser, registerUser } from "./authApi";

export const register = (userData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const user = await registerUser(userData);
    dispatch(authSuccess(user));
    console.log(user, "user");
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const user = await loginUser(userData);
    Cookies.set("authToken", user.token, { expires: 7 }); // Store the authentication token in a cookie
    dispatch(authSuccess(user));
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const signOut = () => (dispatch) => {
  Cookies.remove("authToken"); // Remove the authentication token cookie
  dispatch(logout());
};
