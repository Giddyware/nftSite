import { useState } from "react";
import { TbNetwork } from "react-icons/tb";

import Header from "../components/Header/Header";
import background from "../assets/nft/nft6.jpg";
import avater from "../assets/game.png";
import { textData } from "../utils/textData";
import CollectionTabs from "../components/Tabs";


// const data = [
//   {
//     id: "18932",
//     imgUrl: Image1,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "18293",
//     imgUrl: Image2,
//     floor: 1.2,
//     totalVolume: 138933,
//   },
//   {
//     id: "83229",
//     imgUrl: Image3,
//     floor: 0.8,
//     totalVolume: 1289233,
//   },
//   {
//     id: "5236",
//     imgUrl: Image4,
//     floor: 0.5,
//     totalVolume: 45233,
//   },
//   {
//     id: "87483",
//     imgUrl: Image5,
//     floor: 0.822,
//     totalVolume: 483233,
//   },
//   {
//     id: "3249",
//     imgUrl: Image6,
//     floor: 0.323,
//     totalVolume: 75843,
//   },
//   {
//     id: "1493",
//     imgUrl: Image7,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "1823",
//     imgUrl: Image8,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "18430",
//     imgUrl: Image9,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "1hjd3",
//     imgUrl: Image10,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "1jkdx",
//     imgUrl: Image11,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
//   {
//     id: "189i34j",
//     imgUrl: Image12,
//     floor: 2.3,
//     totalVolume: 23233,
//   },
// ];

const CollectionPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleChange = () => {};

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          "backdrop-filter": "blur(5px)",
          height: "40%",
          objectFit: "cover",
        }}
      >
        <div className="w-[12%] border-4 rounded-3xl absolute bottom-[-32px] left-10">
          <img src={avater} className="rounded-3xl" />
        </div>
      </div>
      <div className="m-10 mt-20">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[30px]">GAME CATEGORY</h1>
          <div>
            <TbNetwork />
          </div>
        </div>

        <div className="w-[85%]">
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-6">
              Items <span className="font-bold">1,071</span>
            </p>

            <p>
              Chain <span className="font-bold">Ethereum</span>
            </p>
          </div>
        </div>

        <p className="w-[85%] my-10 text-[14px]">
          {showMore ? textData : `${textData.substring(0, 150)}`}{" "}
          <b className="cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "...See more"}
          </b>
        </p>

        <div className="flex gap-6 flex-wrap text-[14px]">
          <p className="flex flex-col mr-6">
            <span className="font-bold">1 ETH</span> <span>total volume</span>
          </p>

          <p className="flex flex-col mr-6">
            <span className="font-bold">1%</span>
            <span>listed</span>
          </p>
          <p className="flex flex-col mr-6">
            <span className="font-bold">63</span>
            <span>owners</span>
          </p>
          <p className="flex flex-col mr-6">
            <span className="font-bold">6%</span>
            <span>unique owners</span>
          </p>
        </div>
      </div>

      <div>
        <div className="grid-cols-2">
        <div>
          <div><img src="" alt="" /></div>
        </div>
        </div>
        <div>ksdjjsd jdsjk</div>
      </div>
    </div>
  );
};
export default CollectionPage;
