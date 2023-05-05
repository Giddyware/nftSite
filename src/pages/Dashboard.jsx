import { FaMoneyCheck } from "react-icons/fa";
import { FcWiFiLogo } from "react-icons/fc";
import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiChevronUp, BiSupport } from "react-icons/bi";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import avatar from "../assets/avatar.png";
import Card from "./../components/Cards/Card";

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

const DashboardLinks = ({ name, icon }) => {
  return (
    <a href="" className="flex items-center justify-start">
      {icon}
      <p className="p-5 text-lg">{name}</p>
    </a>
  );
};

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

function createData(id, transaction, atm, date, status) {
  return { transaction, atm, date, status };
}

const rows = [
  createData(1, "deposit", 5, 2, "completed"),
  createData(2, "withdrawal", -4, 2, "pending"),
  createData(3, "mint", -2, 5, "cancelled"),
];

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

const DashboardTable = () => {
  return (
    <TableContainer className="bg-[hsla(0,_0%,_20%,_1)] px-10 py-5 rounded-3xl">
      <Table aria-label="dashboard-table" className="rounded">
        <TableHead className="bg-black rounded ">
          <TableRow className="rounded">
            <TableCell className="text-white border-none">
              Transaction
            </TableCell>
            <TableCell className="text-white border-none">Amount</TableCell>
            <TableCell className="text-white border-none">Date</TableCell>
            <TableCell className="text-white border-none">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="">
          {rows.map(({ id, transaction, atm, date, status }) => (
            <TableRow className="" key={id}>
              <TableCell className="text-white capitalize">
                {transaction === "withdrawal" ? (
                  <div className="flex gap-x-3">
                    <BsArrowUpRight color="hsla(0, 79%, 63%, 1)" />
                    {transaction}
                  </div>
                ) : transaction === "deposit" || transaction === "mint" ? (
                  <div className="flex gap-x-3">
                    <BsArrowDownLeft color="hsla(84, 100%, 44%, 1)" />
                    {transaction}
                  </div>
                ) : (
                  "undefined"
                )}
              </TableCell>
              <TableCell className="text-white">{atm}</TableCell>
              <TableCell className="text-white">{date}</TableCell>
              <TableCell
                className={`capitalize ${
                  status === "pending"
                    ? "text-[hsla(28,_87%,_62%,_1)]"
                    : status === "completed"
                    ? "text-[hsla(84,_100%,_44%,_1)]"
                    : status === "cancelled"
                    ? "text-[hsla(0,_79%,_63%,_1)]"
                    : "undefined"
                }`}
              >
                {status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Dashboard = () => {
  return (
    <div className="grid min-h-screen text-white bg-black grid-cols-[320px,_1fr]">
      <div className="">
        {/* TODO: Make the Sidebar component */}
        <div className="bg-[hsla(0,_0%,_20%,_1)] py-8">
          <a
            href="#"
            className="flex items-center justify-center p-2 pb-8 border-b"
          >
            <FcWiFiLogo size={"10%"} />
            <h1 className="text-2xl font-bold capitalize">OPENSEA</h1>
          </a>
          <ul className="min-h-screen my-10">
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<MdSummarize size={"10%"} />}
                name={"Account Summary"}
              />
            </li>
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<MdOutlineCollections size={"10%"} />}
                name={"NFT Collection"}
              />
            </li>
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<MdCreate size={"10%"} />}
                name={"Mint / Create"}
              />
            </li>
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<GrTransaction size={"10%"} />}
                name={"Transaction"}
              />
            </li>

            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<GiTakeMyMoney size={"10%"} />}
                name={"Sales"}
              />
            </li>
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<BiSupport size={"10%"} />}
                name={"Support"}
              />
            </li>
            <li className="px-5 py-6 ml-20">
              <DashboardLinks
                icon={<GiReceiveMoney size={"10%"} />}
                name={"Withdraw / Deposit"}
              />
            </li>
          </ul>
        </div>
      </div>
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

        <DashboardCard />
        <div className="flex flex-col gap-5 mx-3 my-10">
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
        <div className="mt-12 text-xs font-bold">
          <p className="mb-7">Recent Transactions</p>
          <div>
            <DashboardTable />
          </div>
        </div>
        <div className="mt-12 ">
          <p className="text-xs font-bold mb-7">NFT</p>
          <div className="flex flex-wrap gap-6">
            {data.map((el) => (
              <Card imageWidth={56} key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
