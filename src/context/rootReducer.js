import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import nftReducer from "./nft/nftSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: nftReducer,
});

export default rootReducer;
