import React from "react";
import { BsEye } from "react-icons/bs";
// import {AiTwotoneHeartv } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs";
import Description from "../Description";

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

const Detailtext = ({ description, priceInEtherium, name }) => {
  return (
    <div className="font-poppins flex-1">
      <div className="rounded-[5px] border px-5 w-full py-10">
        <p>Best offer</p>
        <p className="text-[30px] font-bold">
          {priceInEtherium} ETH
          <span className="text-base text-gray-400">$5,060.78</span>
        </p>
        <button className="w-[330px] bg-[#2295EF] py-6 rounded-lg">
          <span className="text-white text-center text-xl"> Buy Now </span>
        </button>
      </div>

      <Description description={description} />
    </div>
  );
};

export default Detailtext;
