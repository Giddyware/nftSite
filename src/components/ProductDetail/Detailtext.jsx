import React from "react";
import { BsEye } from "react-icons/bs";
// import {AiTwotoneHeartv } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs";

import Description from "./Description";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { buyProduct } from "../../context/nft/nftActions";

const DetailText = ({
  productId,
  description,
  name,
  nftOwner,
  priceInEtherium,
}) => {
  const { error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleBuyProduct = () => {
    dispatch(buyProduct(productId));
    toast.error(error);
  };
  return (
    <div className="flex-1 font-poppins">
      <div className="rounded-[5px] flex gap-5 flex-col border px-5 w-full py-10">
        <p>Current Price</p>
        <p className="text-[30px]">
          <span className="font-bold ">{priceInEtherium} ETH</span>
          <span className="ml-3 text-base text-gray-600">$5,060.78</span>
        </p>
        <button
          onClick={handleBuyProduct()}
          className="w-full px-5 py-8 text-2xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-300"
        >
          Buy now
        </button>
      </div>

      <Description description={description} nftOwner={nftOwner} />
    </div>
  );
};

export default DetailText;
