import React from "react";
import { BsEye } from "react-icons/bs";
// import {AiTwotoneHeartv } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs";

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

import Description from "./Description";

const DetailText = ({ description, name, nftOwner, priceInEtherium }) => {
  return (
    <div className="flex-1 font-poppins">
      <div className="rounded-[5px] flex gap-5 flex-col border px-5 w-full py-10">
        <p>Current Price</p>
        <p className="text-[30px]">
          <span className="font-bold ">{priceInEtherium} ETH</span>
          <span className="ml-3 text-base text-gray-600">$5,060.78</span>
        </p>
        <button className="w-full px-5 py-8 text-2xl font-semibold text-white bg-blue-400 rounded-lg hover:bg-blue-300">
          Buy now
        </button>
      </div>

      <Description description={description} nftOwner={nftOwner} />
    </div>
  );
};

export default DetailText;
