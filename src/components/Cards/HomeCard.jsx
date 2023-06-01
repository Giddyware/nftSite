import { useDispatch } from "react-redux";
import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({
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
  imgUrl,
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
      className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-lg h-[300px] mb-5"
    >
      <div className="w-full h-full bg-white rounded-b-2xl shadow-md">
        <div className="w-full h-[80%]">
          <img
            crossOrigin="anonymous"
            src={imgUrl || imageURL}
            alt=""
            className="object-cover h-full w-full rounded-t-2xl"
          />
        </div>
        <div className="p-4 rounded-b-xl bg-white">
          <h3 className="pb-4 text-sm font-bold">{name}</h3>
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
