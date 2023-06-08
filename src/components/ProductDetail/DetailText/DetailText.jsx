import React, { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
// import {AiTwotoneHeartv } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs";
import Description from "../Description";
import axios from "axios";

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

const Detailtext = ({ description, priceInEtherium, name, nftOwner }) => {
  const [usdRate, setUsdRate] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((response) => {
        const data = response.data;
        setUsdRate(data.ethereum.usd);
        console.log(data.ethereum, "data");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="flex-1 font-poppins">
      <div className="rounded-[5px] border px-5 w-full py-10">
        <p>Best offer</p>
        <p className="text-[30px] font-bold">
          {priceInEtherium} ETH
          <span className="ml-2 text-lg text-gray-400">
            ${usdRate * priceInEtherium}
          </span>
        </p>
        <button className="w-full bg-[#2295EF] py-6 rounded-lg">
          <span className="text-xl text-center text-white"> Buy Now </span>
        </button>
      </div>

      <Description description={description} nftOwner={nftOwner} />
    </div>
  );
};

export default Detailtext;
