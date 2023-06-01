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
      className="flex flex-col gap-2 bg-white rounded-lg shadow-lg h-[300px]"
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
        <div className="p-4 rounded-b-2xl">
          <h3 className="pb-4 text-sm font-bold">{name}</h3>
          <div className="flex justify-between mb-5 font-bold">
            <div className="flex justify-between w-full">
              <p className="text-gray-600">FLOOR</p>
              <p className="">{priceInEtherium}ETH</p>
            </div>
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

// import { useDispatch } from "react-redux";
// import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoVerified } from "react-icons/go";

// const Card = ({
//   id,
//   nftId,
//   imageWidth,
//   nftInMarket,
//   photo,
//   floor,
//   totalVolume,
//   priceInEtherium,
//   name,
//   inDashboard,
//   imgUrl,
// }) => {
//   const [enabled, setEnabled] = useState(nftInMarket);
//   const BASE_URL = "https://alphapp.tech";
//   const imageURL = `${BASE_URL}${photo}`;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleToggleMarket = () => {
//     enabled ? dispatch(pullFromMarket(id)) : dispatch(pushToMarket(id));
//   };
//   return (
//     <div className="w-full inline-block">
//       <a href="" className="">
//         <div className="cardWrapper">
//           <div className="h-0 relative pb-[66.6667%]">
//             <span className="inline-block overflow-hidden max-w-full m-0 p-0 opacity-1 relative border-0 h-initial">
//               <img
//                 crossOrigin="anonymous"
//                 src={imgUrl || imageURL}
//                 alt=""
//                 className="w-0 h-0 absolute min-w-full max-w-full min-h-full max-h-full object-cover block m-auto"
//               />
//             </span>
//           </div>
//           <div className="absolute invisible w-1 h-1 z-[-9999]"></div>
//           <div className="p-4 rounded-xl flex">
//             <div className="flex flex-col overflow-hidden w-full">
//               <div className="flex justify-start items-center">
//                 <h3 className="pb-4 text-sm font-bold">{name || "Giddy"}</h3>
//                 <GoVerified color="#2081E2" />
//               </div>
//               <div className="flex  mb-5 font-bold">
//                 <p className="text-gray-600">FLOOR</p>
//                 <p className="">{priceInEtherium}ETH</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {inDashboard && (
//           <>
//             <label className="relative inline-flex items-center mb-5 ml-auto mr-auto cursor-pointer">
//               <span className="ml-3 mr-3 font-medium text-gray-900 dark:text-gray-300">
//                 Push to market
//               </span>
//               <input
//                 // type="checkbox"
//                 // onChange={handleToggleMarket}
//                 // className="sr-only peer"
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={nftInMarket}
//                 readOnly
//               />
//               <div
//                 onClick={handleToggleMarket}
//                 className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[16px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
//               ></div>
//             </label>
//           </>
//         )}
//       </a>
//     </div>
//   );
// };
// export default Card;
