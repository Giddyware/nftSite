import axios from "axios";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CollectionCard = ({ photo, name, num, priceInEtherium }) => {
  const BASE_URL = "http://31.220.31.111:3000";
  const imageURL = `${BASE_URL}${photo}`;

  return (
    <div className="relative flex flex-col gap-5 text-2xl font-bold bg-white shadow-xl cursor-pointer font-poppins rounded-xl collectioncard ">
      <div className="w-[100%] h-[200px] overflow-hidden rounded-t-xl">
        {photo ? (
          <img
            src={imageURL}
            alt={name}
            crossOrigin="anonymous"
            className="w-[100%] h-[100%]  flex items-center ease-linear mx-auto object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-between gap-4 px-7">
        <p>
          {name} <span>{num}</span>
        </p>
        <div>{priceInEtherium} ETH</div>
      </div>
      <div className="px-7 text-gray-500 mb-5 font-light">
        Last sale: 0.69 ETH
      </div>

      <button className="bg-blue-500  rounded-b-[12px] flex absolute bottom-0 w-full pl-8 overflow-hidden">
        <div className="flex items-center flex-1 text-white">
          <div className="w-full pt-3 text-center"> Buy now </div>
        </div>
        <div className="border-l-solid border-l border-2-[black] px-2 h-full justify-center w-20">
          <div className="flex items-center justify-center pt-3 text-lg font-bold">
            <AiOutlineShoppingCart color="white" size={20} stroke={5} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default CollectionCard;
