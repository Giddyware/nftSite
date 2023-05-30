import React from "react";
import TableRow from "./TableRow/TableRow";
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

const trending = [
  {
    image: Image1,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },

  {
    image: Image2,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image3,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image3,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image4,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image5,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image6,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image7,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image8,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
  {
    image: Image9,
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH",
  },
];

const Header = ({ collection, floorPrice, Volume }) => {
  <div className="grid grid-cols-[3fr_2fr_2fr]">
    <li className="">{collection}</li>
    <li className="text-center">{floorPrice}</li>
    <li className="text-center">{Volume}</li>
  </div>;
};

const headers = [
  // {
  //   collection: "COLLECTION",
  //   floorPrice: "FLOOR PRICE",
  // }
];

const Trending = () => {
  return (
    <div className="px-5 mx-auto mt-10">
      <div className="grid grid-cols-2 text-[grey] font-bold mb-5">
        <div className="grid grid-cols-[3fr_2fr_2fr]">
          <li className="">COLLECTION</li>
          <li className="text-center">FLOOR PRICE</li>
          <li className="text-center">VOLUME</li>
        </div>

        <div className="grid grid-cols-[3fr_2fr_2fr]">
          <li className="">COLLECTION</li>
          <li className="text-center">FLOOR PRICE</li>
          <li className="text-center">VOLUME</li>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
        {trending.map((val, index) => {
          return <TableRow {...val} no={index} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
