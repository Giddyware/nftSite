import { BiChevronUp } from "react-icons/bi";

import Image1 from "./../assets/nft/nft1.jpg";
import Image2 from "./../assets/nft/nft2.jpg";
import Image3 from "./../assets/nft/nft3.jpg";
import Image4 from "./../assets/nft/nft4.jpg";
import Image5 from "./../assets/nft/nft5.jpg";
import Image6 from "./../assets/nft/nft6.jpg";
import Image7 from "./../assets/nft/nft7.jpg";
import Image8 from "./../assets/nft/nft8.png";
import Image9 from "./../assets/nft/nft9.jpg";
import Image10 from "./../assets/nft/nft10.png";
import Image11 from "./../assets/nft/nft11.jpg";
import Image12 from "./../assets/nft/nft12.jpg";

import avatar from "../assets/avatar.png";
import Card from "./../components/Cards/Card";
import RecentSalesTable from "../components/UI/RecentSalesTable";
import DashboardTable from "../components/UI/DashboardTable";
import SideNav from "../components/UI/SideNav";


const DashboardCard = () => {
  return (
    <div className="bg-[hsla(0,_0%,_20%,_1)] py-10 px-16 flex justify-between rounded-2xl">
      <div>
        <p>Account Balance</p>
        <p className="text-3xl font-bold">50 ETH</p>
      </div>
      <div className="flex gap-x-6">
        <button className="px-10 py-4 bg-blue-500 rounded-lg">Deposit</button>
        <button className="px-10 py-4 text-black bg-white rounded-lg">
          Withdraw
        </button>
      </div>
    </div>
  );
};

const data = [
  {
    id: "18932",
    imgUrl: Image1,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "18293",
    imgUrl: Image2,
    floor: 1.2,
    totalVolume: 138933,
  },
  {
    id: "83229",
    imgUrl: Image3,
    floor: 0.8,
    totalVolume: 1289233,
  },
  {
    id: "5236",
    imgUrl: Image4,
    floor: 0.5,
    totalVolume: 45233,
  },
  {
    id: "87483",
    imgUrl: Image5,
    floor: 0.822,
    totalVolume: 483233,
  },
  {
    id: "3249",
    imgUrl: Image6,
    floor: 0.323,
    totalVolume: 75843,
  },
  {
    id: "1493",
    imgUrl: Image7,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1823",
    imgUrl: Image8,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "18430",
    imgUrl: Image9,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1hjd3",
    imgUrl: Image10,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1jkdx",
    imgUrl: Image11,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "189i34j",
    imgUrl: Image12,
    floor: 2.3,
    totalVolume: 23233,
  },
];


const Dashboard = () => {
  return (
    <div className="grid min-h-screen text-white bg-black grid-cols-[320px,_1fr]">
      <SideNav />
      <div className="w-[100%] p-8">
        <div className="flex items-center justify-center pb-4 mb-8 border-b">
          <div className="mr-auto">
            <h1 className="text-lg">Home</h1>
          </div>
          <div className="flex items-center justify-center ">
            <div>language</div>
            <div className="flex px-4 bg-[#0d0d0d] item-center justify-center rounded-lg py-2">
              <img
                className="border border-solid rounded-full h-14 w-14 border-whiter"
                src={avatar}
                alt=""
              />

              <div className="flex flex-col items-center justify-center ml-3 mr-8">
                <p>Lorem ipsum</p>
                <p>Verified</p>
              </div>
              <BiChevronUp size={15} />
            </div>
          </div>
        </div>

        <DashboardCard id="home" />
        <div className="flex flex-col gap-5 mx-3 my-10" id="listing">
          <div className="w-full pb-4 border-b">
            <div className="flex justify-between">
              {/* TODO: Add the logo of the coin */}
              <p>logo ETH</p>
              <p>~19400</p>
            </div>
            <div className="flex justify-between text-gray-500">
              {/* TODO: Add the logo of the coin */}
              <p>Logo WETH</p>
              <p>~19400</p>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-between">
              {/* TODO: Add the logo of the coin */}
              <p>logo ETH</p>
              <p>~19400</p>
            </div>
            <div className="flex justify-between text-gray-500">
              {/* TODO: Add the logo of the coin */}
              <p>Logo WETH</p>
              <p>~19400</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xs font-bold" id="RecentTransactionTable">
          <p className="mb-7">Recent Transactions</p>
          <div>
            <DashboardTable />
          </div>
        </div>
        <div className="mt-12" id="nft">
          <p className="text-xs font-bold mb-7">NFT</p>
          <div className="flex flex-wrap gap-6">
            {data.map((el) => (
              <Card imageWidth={56} key={el.id} {...el} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-xs font-bold" id="RecentSalesTable">
          <p className="mb-7">Recent Sales</p>
          <div>
            <RecentSalesTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
