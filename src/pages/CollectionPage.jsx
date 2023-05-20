import { useEffect, useState } from "react";
import { TbNetwork } from "react-icons/tb";

import Header from "../components/Header/Header";
import background from "../assets/nft/nft6.jpg";
import avater from "../assets/game.png";
import { textData } from "../utils/textData";
import CollectionTabs from "../components/Tabs";
import ColllectionCard from "../components/UI/ColllectionCard";

import Image1 from "../assets/nft/nft1.jpg";
import Image2 from "../assets/nft/nft2.jpg";
import Image3 from "../assets/nft/nft3.jpg";
import Image4 from "../assets/nft/nft4.jpg";
import Image5 from "../assets/nft/nft5.jpg";
import Image6 from "../assets/nft/nft6.jpg";
import Image7 from "../assets/nft/nft7.jpg";
import Image8 from "../assets/nft/nft8.png";
import Image9 from "../assets/nft/nft9.jpg";
import Image10 from "../assets/nft/nft10.png";
import Image11 from "../assets/nft/nft11.jpg";
import Image12 from "../assets/nft/nft12.jpg";
import { useDispatch, useSelector } from "react-redux";
import { CgLoadbar } from "react-icons/cg";
import { BiErrorCircle } from "react-icons/bi";
import { getNfts } from "../context/nft/nftActions";
// import { getNfts } from "../context/nft/nftSlice";

// const coll = [
//   {
//     name: "Milady ",
//     image: Image1,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "Milady ",
//     image: Image2,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "Milady ",
//     image: Image3,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "Milady ",
//     image: Image4,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image5,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image6,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image7,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image8,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image9,
//     num: 2.3,
//     price: 23233,
//   },
//   {
//     name: "18932",
//     image: Image10,
//     num: 2.3,
//     price: 23233,
//   },
// ];

const CollectionPage = () => {
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const { nfts, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getNfts());
    console.log(nfts, "nfts");
  }, [dispatch]);
  console.log(nfts, "2nfts");

  if (isLoading) {
    return (
      <div>
        Loading...
        <CgLoadbar />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <BiErrorCircle />
      </div>
    );
  }

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

      <div className="grid grid-cols-4 gap-10 m-10">
        {/* {coll.map((lec) => (
          <ColllectionCard key={lec.image} {...lec} />
        ))} */}

        {nfts?.data?.map((nft) => (
          <ColllectionCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
