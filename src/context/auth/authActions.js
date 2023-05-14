import Cookies from "js-cookie";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import { loginUser, registerUser } from "./authApi";
import { toast } from "react-toastify";




export const register = (userData) => async (dispatch) => {
  console.log(userData, "userData");
  dispatch(authStart());
  try {
    const user = await registerUser(userData);
    console.log(user, "regUser");
    dispatch(authSuccess(user));
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const user = await loginUser(userData);
    console.log(user, "loginUser");
    Cookies.set("authToken", user.token, { expires: 7 }); // Store the authentication token in a cookie
    dispatch(authSuccess(user));
    toast.success("Login Successful");
   
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const signOut = () => (dispatch) => {
  Cookies.remove("authToken"); // Remove the authentication token cookie
  dispatch(logout());
};
