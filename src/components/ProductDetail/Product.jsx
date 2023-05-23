import React from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Image2 from "../../assets/nft/nft2.jpg";

const Product = () => {
  return (
    <div className="w-[40%] border-solid border-[#eee] border rounded-xl">
      <img src={Image2} alt="" className="w-full h-full rounded-xl" />
    </div>
  );
};
export default Product;
