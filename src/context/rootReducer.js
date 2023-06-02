import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import nftReducer from "./nft/nftSlice";
import transactionReducer from "./transaction/transactionSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: nftReducer,
  transaction: transactionReducer,
});

export default rootReducer;
