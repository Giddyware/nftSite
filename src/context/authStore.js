import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import nftSlice from "./nft/nftSlice";
import rootReducer from "./rootReducer";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
// export default store;

const store = configureStore({
  reducer: rootReducer,
});
export default store;
