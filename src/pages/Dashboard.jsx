import { FaMoneyCheck } from "react-icons/fa";
import { FcWiFiLogo } from "react-icons/fc";
import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const DashboardLinks = ({ name, icon }) => {
  return (
    <a href="" className="flex items-center justify-start">
      {icon}
      <p className="p-5 text-lg">{name}</p>
    </a>
  );
};

const Dashboard = () => {
  return (
    <div className="flex bg-[hsla(0,_0%,_20%,_1)] text-white px-12 py-10">
      <div className="w-[10%]">
        <div className="h-screen">
          <a href="#" className="flex items-center justify-center p-2 ">
            <FcWiFiLogo size={"10%"} />
            <h1>OPENSEA</h1>
          </a>
          <ul>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<MdSummarize size={"20%"} />}
                name={"Account Summary"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<MdOutlineCollections size={"20%"} />}
                name={"NFT Collection"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<MdCreate size={"20%"} />}
                name={"Mint / Create"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<GrTransaction size={"20%"} />}
                name={"Transaction"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<GiTakeMyMoney size={"20%"} />}
                name={"Sales"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<BiSupport size={"20%"} />}
                name={"Support"}
              />
            </li>
            <li className="px-5 py-6">
              <DashboardLinks
                icon={<GiReceiveMoney size={"20%"} />}
                name={"Withdraw / Deposit"}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1fr] outline-1 outline-slate-700 outline">
        <p>HOME</p>
      </div>
    </div>
  );
};
export default Dashboard;
