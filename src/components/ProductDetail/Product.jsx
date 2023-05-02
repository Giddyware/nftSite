import React from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Image2 from "../../assets/nft/nft2.jpg";

const Product = () => {
  return (
    <div className="w-[40%] rounded-[10px] h-[687px] border-solid border-[#eee] border-[1px]">
      <div className="flex gap-4 ">
        <div className="w-12">
          <FcLike size={"100%"} color="black" />
        </div>
        <div className="w-12">
          <MdOutlineCastConnected size={"100%"} color="black" />
        </div>
      </div>
      <div>
        <img src={Image2} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
export default Product;
