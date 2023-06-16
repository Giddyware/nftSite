import React, { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
// import {AiTwotoneHeartv } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs";
import Description from "../Description";
import axios from "axios";
import { buyProduct } from "../../../context/nft/nftActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Navigate } from "react-router-dom";

const Detailtext = ({ selectedItem }) => {
  const [usdRate, setUsdRate] = useState(0);
  const { error, isLoading } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id, description, name, nftOwner, priceInEtherium, category } =
    selectedItem;
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((response) => {
        const data = response.data;
        setUsdRate(data.ethereum.usd);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleBuyProduct = () => {
    setLoading(true);
    dispatch(buyProduct(id));
    setLoading(false);

    // error && toast.error(error);
    if (error === "this Nft already belong to you") {
      return (
        <div>
          {toast.warning("This NFT is already yours! \n \n Try to buy other", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          })}
          {/* <Navigate to={"/category=marketPlace"} /> */}
        </div>
      );
    }

    if (error) {
      return (
        <div>
          {toast.warning(
            "You don't have enough balance to buy this NFT. \n  \n Kindly fund your wallet to make your purchase",
            {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
            }
          )}
          {/* <Navigate to={"/category=marketPlace"} /> */}
        </div>
      );
    }
  };

  return (
    <div className="flex-1 font-poppins">
      <div className="rounded-[5px] border px-5 w-full py-10">
        <p>Best offer</p>
        <p className="text-[30px] font-bold">
          {priceInEtherium} ETH
          <span className="ml-2 text-lg text-gray-400">
            ${(usdRate * priceInEtherium).toFixed(2)}
          </span>
        </p>
        <button
          className="w-full bg-[#2295EF] py-6 rounded-lg"
          onClick={() => handleBuyProduct()}
        >
          <span className="text-xl text-center text-white">
            {loading ? (
              <span>
                Processing..."
                <AiOutlineLoading className="inline ml-3 animate-spin" />
              </span>
            ) : (
              "Buy Now"
            )}
          </span>
        </button>
      </div>

      <Description description={description} nftOwner={nftOwner} />
    </div>
  );
};

export default Detailtext;
