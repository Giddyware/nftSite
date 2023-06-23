import { FaMoneyCheck } from "react-icons/fa";

import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiLogOut, BiSupport } from "react-icons/bi";
import { RiLuggageDepositFill, RiLuggageDepositLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Logo_sm from "../../assets/logo_sm.png";
import { useTranslation } from "react-i18next";
import {
  IoWalletOutline,
  IoImageOutline,
  IoCreateOutline,
  IoCardOutline,
  IoLogOutOutline,
  IoSwapHorizontalOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../context/auth/authActions";
import Cookies from "js-cookie";

const DashboardLinks = ({ hash, name, icon }) => {
  return (
    <div className="flex items-center justify-start">
      {icon}
      <p className="hidden p-2 text-2xl md:inline">{name}</p>
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

const SideNav = ({ refs, showMint }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const LogMeOut = () => {
    dispatch(logoutUser());
    Cookies.remove("authToken");
  };
  return (
    <div className="h-[100%] w-full">
      <div className=" py-8 fixed top-0 left-0 bg-gray-100 h-full md:max-w-[250px] lg:max-w-[350px]">
        <a
          href="#"
          className="flex items-center p-2 pb-8 border-b md:justify-center "
        >
          <img className="hidden md:inline md:w-80" src={Logo} alt="logo" />
          <img className="w-20 md:hidden" src={Logo_sm} alt="" />
          {/* <h1 className="text-2xl font-bold capitalize">OPENSEA</h1> */}
        </a>
        <ul className="flex flex-col gap-5 my-10">
          <li className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300">
            <DashboardLinks
              icon={<IoWalletOutline size={"20px"} />}
              name={t("dashboard.account_summary")}
            />
          </li>
          <li
            className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
            onClick={() => {
              refs.nftRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<IoImageOutline size={"20px"} />}
              name={t("dashboard.NFT_Collection")}
            />
          </li>
          <button
            // to={`${location.pathname}/createNft`}
            onClick={() => showMint()}
            className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<IoCreateOutline size={"20"} />}
              name="Mint"
            />
          </button>
          <li
            className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
            onClick={() => {
              refs.transactionRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<IoSwapHorizontalOutline size={"20px"} />}
              name={t("dashboard.transaction")}
            />
          </li>

          <li
            className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
            onClick={() => {
              refs.saleRef.current.scrollIntoView();
            }}
          >
            {/* <Link to="/#RecentSalesTable"> */}
            <DashboardLinks
              icon={<IoCardOutline size={"20px"} />}
              name={t("dashboard.sales")}
              // hash="/#RecentSalesTable"
            />
            {/* </Link> */}
          </li>
          {/* <li className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300">
            <DashboardLinks
              icon={<BiSupport size={"20px"} />}
              name={t("dashboard.support")}
            />
          </li> */}

          <Link
            to={`/category=marketplace`}
            className="px-5 py-3 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
            // target="_blank"
          >
            <DashboardLinks
              icon={<RiLuggageDepositLine size={"20px"} />}
              name={"Market Place"}
            />
          </Link>

          <button
            onClick={() => LogMeOut()}
            className="px-5 py-3 mt-32 ml-3 rounded-l-full cursor-pointer md:ml-28 hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<IoLogOutOutline size={"20px"} />}
              name={"Log out"}
            />
          </button>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
