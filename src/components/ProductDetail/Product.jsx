import React from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Image2 from "../../assets/nft/nft2.jpg";

const Product = ({ photo }) => {
  const BASE_URL = "https://alphapp.tech";
  const imageURL = `${BASE_URL}${photo}`;
  return (
    <div className="lg:w-[40%] w-full border-solid border-[#eee] border rounded-xl">
      <img
        crossOrigin="anonymous"
        src={imageURL}
        alt={imageURL}
        className="object-cover w-full min-h-full rounded-xl"
      />
    </div>
  );
};
export default Product;
