import { getNftsAPI } from "./nftApi";

export const getNfts = createAsyncThunk(
  "auth/getProducts",
  async (_, { dispatch }) => {
    try {
      const nfts = await getNftsAPI();
      // Dispatch action to store products
      console.log(nfts);
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);
