import { FaMoneyCheck } from "react-icons/fa";

import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const DashboardLinks = ({ hash, name, icon }) => {
  return (
    <div className="flex items-center justify-start">
      {icon}
      <p className="p-2 text-2xl">{name}</p>
    </div>
  );
};

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

const SideNav = ({ refs }) => {
  return (
    <div className="">
      {/* TODO: Make the SideNav component */}
      <div className="min-h-full py-8 bg-gray-100">
        <a
          href="#"
          className="flex items-center justify-center p-2 pb-8 border-b "
        >
          <img className="w-80" src={Logo} alt="logo" />
          {/* <h1 className="text-2xl font-bold capitalize">OPENSEA</h1> */}
        </a>
        <ul className="flex flex-col gap-5 my-10">
          <li className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400">
            <DashboardLinks
              icon={<MdSummarize size={"10%"} />}
              name={"Account Summary"}
            />
          </li>
          <li
            className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400"
            onClick={() => {
              console.log(refs.nftRef, "nftRef");
              refs.nftRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<MdOutlineCollections size={"10%"} />}
              name={"NFT Collection"}
            />
          </li>
          <li className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400">
            <DashboardLinks
              icon={<MdCreate size={"10%"} />}
              name={"Mint / Create"}
              hash="/mint"
            />
          </li>
          <li
            className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400"
            onClick={() => {
              console.log(refs.transactionRef, "transactionRef");
              refs.transactionRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<GrTransaction size={"10%"} />}
              name={"Transaction"}
            />
          </li>

          <li
            className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400"
            onClick={() => {
              console.log(refs.saleRef, "salesRef");
              refs.saleRef.current.scrollIntoView();
            }}
          >
            {/* <Link to="/#RecentSalesTable"> */}
            <DashboardLinks
              icon={<GiTakeMyMoney size={"10%"} />}
              name={"Sales"}
              // hash="/#RecentSalesTable"
            />
            {/* </Link> */}
          </li>
          <li className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400">
            <DashboardLinks
              icon={<BiSupport size={"10%"} />}
              name={"Support"}
            />
          </li>
          <li className="px-5 py-6 ml-20 rounded-l-full cursor-pointer hover:bg-gray-400">
            <DashboardLinks
              icon={<GiReceiveMoney size={"10%"} />}
              name={"Withdraw / Deposit"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
