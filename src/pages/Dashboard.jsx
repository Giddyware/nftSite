import { FaMoneyCheck } from "react-icons/fa";
import { FcWiFiLogo } from "react-icons/fc";
import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiChevronUp, BiSupport } from "react-icons/bi";
import avatar from "../assets/avatar.png";

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
        <div>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
