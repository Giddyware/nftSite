import { useDispatch } from "react-redux";
import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoVerified } from "react-icons/go";

const HomeCard = ({
  id,
  nftId,
  imageWidth,
  photo,
  nftOwner,
  totalVolume,
  priceInEtherium,
  name,
}) => {
  const BASE_URL = "https://alphapp.tech";
  const imageURL = `${BASE_URL}${photo}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleMarket = () => {
    enabled ? dispatch(pullFromMarket(id)) : dispatch(pushToMarket(id));
  };
  return (
    // <div className="h-56">
    <a
      href="#"
      className="flex flex-col h-[308px] hover:rounded-lg gap-2 pb-10 mb-5 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="w-full h-full hover:rounded-lg transition-transform duration-300 transform bg-white shadow-md rounded-b-2xl hover:-translate-y-3">
        <div className="w-full h-[80%] rounded-lg">
          <img
            crossOrigin="anonymous"
            src={imageURL}
            alt=""
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          <div className="flex gap-2">
            <h3 className="pb-4 font-bold">{nftOwner?.username}</h3>
            <span>
              {nftOwner?.userVerified ? <GoVerified color="#2081E2" /> : null}
            </span>
          </div>
          <h3 className="pb-4 text-xl font-bold">{name}</h3>
          <div className="flex justify-between font-bold">
            <div className="flex justify-between w-full">
              <p className="text-gray-600">FLOOR</p>
              <p className="">{priceInEtherium}ETH</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    // </div>
  );
};
export default HomeCard;
