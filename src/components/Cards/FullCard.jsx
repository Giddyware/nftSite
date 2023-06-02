import { useDispatch } from "react-redux";
import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
import { useState } from "react";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const FullCard = ({
  id,
  nftId,
  nftInMarket,
  photo,
  floor,
  totalVolume,
  priceInEtherium,
  name,
  inDashboard,
  imgUrl,
  nftName,
}) => {
  const [enabled, setEnabled] = useState(nftInMarket);
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
      className="flex min-w-[200px]  md:min-w-[309px] min-h-[330px] flex-col gap-2 bg-gray-100 rounded-2xl shadow-lg h-[350px]"
    >
      <div className="relative w-full h-full rounded-2xl">
        <img
          crossOrigin="anonymous"
          src={imgUrl || imageURL}
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute bottom-0 w-full rounded-2xl h-28 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-0 p-4 text-xl text-white font-poppins">
          <h3 className="pb-2 text-[15px] font-bold flex gap-3 capitalize">
            <span>{nftName}</span>
            <GoVerified color="#2081E2" />
          </h3>
          <div className="flex gap-3 mb-3 text-2xl font-medium">
            <p className="">Floor:</p>
            <p className="">{floor}ETH</p>
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
export default FullCard;
