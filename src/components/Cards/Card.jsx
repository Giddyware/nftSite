import { useDispatch } from "react-redux";
import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  nftId,
  imageWidth,
  nftInMarket,
  photo,
  floor,
  totalVolume,
  priceInEtherium,
  name,
  inDashboard,
}) => {
  const [enabled, setEnabled] = useState(nftInMarket);
  const BASE_URL = "https://alphapp.tech";
  const imageURL = `${BASE_URL}${photo}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(id);

  const handleToggleMarket = () => {
    enabled ? dispatch(pullFromMarket(id)) : dispatch(pushToMarket(id));
  };
  return (
    // <div className="h-56">
    <a
      href="#"
      className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="w-full">
        <img
          crossOrigin="anonymous"
          src={imageURL}
          alt=""
          className={`object-cover h-56 rounded-t-lg ${
            imageWidth === "full" ? "w-full" : "w-full"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="pb-4 text-sm font-bold">{name}</h3>
        <div className="flex justify-between mb-5 font-bold">
          <div className="">
            <p className="text-gray-600">FLOOR</p>
            <p className="">{floor}ETH</p>
          </div>
          <div className="">
            <p className="text-gray-600">TOTAL VOLUME</p>
            <p>{priceInEtherium} ETH</p>
          </div>
        </div>
      </div>
      {inDashboard && (
        <>
          <label className="relative inline-flex items-center mb-5 ml-auto mr-auto cursor-pointer">
            <span className="ml-3 mr-3 font-medium text-gray-900 dark:text-gray-300">
              Push to market
            </span>
            <input
              // type="checkbox"
              // onChange={handleToggleMarket}
              // className="sr-only peer"
              type="checkbox"
              className="sr-only peer"
              checked={nftInMarket}
              readOnly
            />
            <div
              onClick={handleToggleMarket}
              className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[16px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </>
      )}
    </a>
    // </div>
  );
};
export default Card;
