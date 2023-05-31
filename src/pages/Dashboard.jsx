import { useState, useRef, useEffect } from "react";
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
import Ethereum_logo from "./../assets/Ethereum_logo.png";
import Weth_logo from "./../assets/weth_logo.png";

import avatar from "../assets/avatar.png";
import Card from "./../components/Cards/Card";
import RecentSalesTable from "../components/UI/RecentSalesTable";
import DashboardTable from "../components/UI/DashboardTable";
import SideNav from "../components/UI/SideNav";
import Withdraw from "../components/UI/Withdraw";
import Overlay from "../components/UI/Overlay";

import { BiUserCircle } from "react-icons/bi";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import { SocketContext } from "../context/socket";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { Link, useLocation } from "react-router-dom";
import { getUserDetails } from "../context/auth/authActions";

const DashboardCard = ({ showModal, wallet }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <div className="flex md:justify-between flex-col md:flex-row gap-6 px-16 py-10 sm:justify-center sm:items-center  bg-gray-200 rounded-2xl">
      <div>
        <p>{t("dashboard.account_balance")}</p>
        <p className="md:text-3xl font-bold">{wallet?.accountBallance} ETH</p>
      </div>
      <div className="flex gap-x-3 md:gap-x-6 font-bold text-2xl">
        <Link to={`${location.pathname}/deposit`}>
          <button className="px-16 py-6  md:px-24 md:py-8 bg-blue-500 rounded-lg cursor-pointer">
            {t("dashboard.Deposit")}
          </button>
        </Link>
        <button
          className="px-16 py-6  md:px-24 md:py-8 text-gray-400 bg-white rounded-lg cursor-pointer"
          onClick={() => showModal()}
        >
          {t("dashboard.withdrawal")}
        </button>
      </div>
    </div>
  );
};

const languages = [
  {
    code: "en",
    name: "English",
  },
  // {
  //   code : "es",
  //   name: "Estonianet"
  // },
  // {
  //   code: "fin",
  //   name: "Finnish"
  // },
  {
    code: "fr",
    name: "French",
  },
  // {
  //   code: "bs",
  //   name:"Bosnian"
  // },
  // {
  //   code: "sp",
  //   name: "Spanish"
  // },
  // {
  //   code: "de",
  //   name: "Desutch"
  // }
];

const Dashboard = () => {
  const saleRef = useRef(null);
  const nftRef = useRef(null);
  const transactionRef = useRef(null);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const ModalStatus = () => {
    setShowModal((prev) => !prev);
  };

  const ChangeLanguage = (code) => {
    i18next.changeLanguage(code);
  };

  const { userDetails, isLoading, error } = useSelector((state) => state.auth);

  const { myNftTransaction, myNft, wallet, photo, userVerified, username } =
    userDetails;
  useEffect(() => {
    dispatch(getUserDetails());
  }, [userDetails]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    userDetails && (
      <div className="grid min-h-screen text-gray bg-[white] grid-cols-[60px,_1fr]  md:grid-cols-[350px,_1fr] text-xl">
        <Overlay show={showModal} clear={ModalStatus} />
        <Withdraw show={showModal} modalStatus={ModalStatus} />

        <SideNav
          show={showModal}
          modalStatus={ModalStatus}
          refs={{ saleRef, nftRef, transactionRef }}
        />

        <div className="w-[100%] p-8">
          <div className="flex items-center justify-center pb-4 mb-8 border-b">
            <div className="mr-auto">
              <h1 className="text-lg">{t("dashboard.home")}</h1>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <select
                  name="devices"
                  onChange={(e) => i18next.changeLanguage(e.target.value)}
                >
                  {languages.map((lag) => (
                    <option value={lag.code}> {lag.name} </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center px-4 py-2 bg-gray-100 rounded-lg item-center">
                <img
                  className="border border-solid rounded-full h-14 w-14 border-whiter"
                  src={avatar}
                  alt=""
                />
                <div className="flex flex-col items-center justify-center ml-3 mr-8">
                  <p>{username}</p>
                  <p className="font-bold">
                    {!!userVerified ? (
                      <span className="text-green-400">Verified</span>
                    ) : (
                      <span className="text-red-400"> Unverified</span>
                    )}
                  </p>
                </div>
                <BiChevronUp size={15} />
              </div>
            </div>
          </div>

          <DashboardCard
            id="home"
            wallet={!!wallet && wallet}
            showModal={ModalStatus}
          />

          <div
            className="flex flex-col px-8 my-10 bg-gray-200 py-7 rounded-xl"
            id="listing"
          >
            <div className="grid grid-cols-[40px,_80px_1fr] w-full items-center">
              <div>
                <img className="w-5" src={Ethereum_logo} alt="Ethereum_logo" />
              </div>
              <p>ETH</p>
              <p className="justify-self-end">~128938</p>
            </div>
            <div className="flex justify-between mb-10 ml-[40px] text-sm text-gray-400">
              <p>EHT</p>
              <p>~839</p>
            </div>
            <div className="grid grid-cols-[40px,_80px_1fr]">
              <div>
                <img className="w-7" src={Weth_logo} alt="Weth_logo" />
              </div>
              <p>WETH</p>
              <p className="justify-self-end">~128938</p>
            </div>
            <div className="flex justify-between text-sm ml-[40px] text-gray-400">
              <p>WETH</p>
              <p>~839</p>
            </div>
          </div>
          <div
            className="mt-12 text-3xl font-bold"
            id="RecentTransactionTable"
            ref={transactionRef}
          >
            <p className="mb-7">{t("dashboard.recent_transactions")}</p>
            <div>
              <DashboardTable wallet={wallet} />
            </div>
          </div>
          <div className="mt-12" id="nft" ref={nftRef}>
            <p className="text-3xl font-bold mb-7">NFTs</p>
            <div className="grid grid-cols-4 gap-6">
              {myNft?.map((el) => (
                <Card inDashboard={true} imageWidth={56} key={el.id} {...el} />
              ))}
            </div>
          </div>

          <div
            className="mt-12 text-3xl font-bold"
            id="RecentSalesTable"
            ref={saleRef}
          >
            <p className="mb-7">{t("dashboard.Recent_sales")}</p>
            <div>
              <RecentSalesTable myNftTransaction={myNftTransaction} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Dashboard;
