import { useState, useRef, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
import Ethereum_logo from "./../assets/eth.png";
import Weth_logo from "./../assets/weth.png";

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
import Deposit from "./Deposit";
import Mint from "./Mint";
import axios from "axios";
import Profile from "../components/Profile";
import { formatToThousand } from "../utils/formatToThousand.js";
import SupportChat from "../components/SupportChat";
import WithdrawalSubmitted from "../components/WithdrawalSubmitted";
import AddFundsModal from "../components/UI/AddFundsModal";
import MenuItem from "../components/MenuItem";
import ChangePass from "../components/ChangePass";

const DashboardCard = ({ showDeposit, showWithdraw, wallet }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 px-16 py-10 bg-gray-200 md:justify-between md:flex-row sm:justify-center sm:items-center rounded-2xl">
      <div>
        <p>{t("dashboard.account_balance")}</p>
        <p className="font-bold md:text-3xl">
          {wallet?.accountBallance?.toFixed(4)} ETH
        </p>
      </div>
      <div className="flex text-2xl font-bold gap-x-3 md:gap-x-6">
        {/* <Link to={`${location.pathname}/deposit`}> */}
        <button
          onClick={() => showDeposit()}
          className="px-16 py-6 bg-blue-500 rounded-lg cursor-pointer md:px-24 md:py-8"
        >
          {t("dashboard.Deposit")}
        </button>
        {/* </Link> */}
        <button
          className="px-16 py-6 text-gray-400 bg-white rounded-lg cursor-pointer md:px-24 md:py-8"
          onClick={() => showWithdraw()}
        >
          Withdraw
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
  const [showModalWithdraw, setShowModalWithdraw] = useState(false);
  const [showModalDeposit, setShowModalDeposit] = useState(false);
  const [usdRate, setUsdRate] = useState(0);
  const [showModalMint, setShowModalMint] = useState(false);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [showWithdrawalSubmitted, setShowWithdrawalSubmitted] = useState(false);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onWithdraw = () => {
    setShowModalWithdraw((prev) => !prev);
  };
  const onDeposit = () => {
    setShowModalDeposit((prev) => !prev);
  };
  const onMint = () => {
    setShowModalMint((prev) => !prev);
  };
  const onProfile = () => {
    setShowModalProfile((prev) => !prev);
  };
  const onPassword = () => {
    setShowModalPassword((prev) => !prev);
  };

  const onWithdrawSubmit = () => {
    setShowWithdrawalSubmitted((prev) => !prev);
  };
  const onAddFunds = () => {
    if (wallet?.myMintFee > wallet?.accountBallance) {
      showAddFunds(true);
    }
  };

  const ChangeLanguage = (code) => {
    i18next.changeLanguage(code);
  };

  const { userDetails, isLoading, error } = useSelector((state) => state.auth);

  const { myNftTransaction, myNft, wallet, photo, emailVerified, username } =
    userDetails;

  useEffect(() => {
    dispatch(getUserDetails());
    // console.log(userDetails, "userDetails====");
  }, [dispatch]);
  console.log(userDetails, "userDetails====");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((response) => {
        const data = response.data;
        setUsdRate(data.ethereum.usd);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const baseUrl = "https://alphapp.tech";
  const imgUrl = `${baseUrl}${photo}`;
  console.log(imgUrl, "imgUrl");
  return (
    !!userDetails && (
      <div className="grid  min-h-screen text-gray bg-[white] grid-cols-[60px,_minmax(140px,_1fr)]  md:grid-cols-[280px,_minmax(320px,_1fr)] text-xl">
        <Withdraw show={showModalWithdraw} modalStatus={onWithdraw} />
        <Deposit show={showModalDeposit} modalStatus={onDeposit} />
        <Mint show={showModalMint} modalStatus={onMint} />
        <Profile show={showModalProfile} modalStatus={onProfile} />
        <ChangePass show={showModalPassword} modalStatus={onPassword} />
        <WithdrawalSubmitted
          show={showWithdrawalSubmitted}
          modalStatus={onWithdrawSubmit}
        />
        {/* <AddFundsModal show={showAddFunds} modalStatus={onAddFunds} /> */}
        <SideNav showMint={onMint} refs={{ saleRef, nftRef, transactionRef }} />

        <div className="w-[100%] py-8 pr-8">
          <div className="flex items-center justify-center pb-4 mb-8 border-b">
            <div className="mr-auto">
              <h1 className="text-lg">{t("dashboard.home")}</h1>
            </div>
            <div className="flex items-center justify-center min-w-[20%]">
              {/* <div>
                <select
                  name="devices"
                  onChange={(e) => i18next.changeLanguage(e.target.value)}
                >
                  {languages.map((lag) => (
                    <option value={lag.code}> {lag.name} </option>
                  ))}
                </select>
              </div> */}
              <div
                className="flex justify-center px-4 py-2 bg-gray-100 rounded-lg item-center"
                onClick={toggleOpen}
              >
                <div className="h-14 w-14">
                  <img
                    className="bg-gray-200 border border-white border-solid w-full h-full object-cover rounded-full"
                    src={photo && imgUrl}
                    alt=""
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="flex items-center w-full justify-between">
                  <p>{username}</p>
                  <p className="font-bold">
                    {!!emailVerified ? (
                      <span className="text-green-400">Verified</span>
                    ) : (
                      <span className="text-red-400"> Unverified</span>
                    )}
                  </p>
                  {!isOpen && <BiChevronUp size={15} />}
                  {isOpen && <BiChevronDown size={15} />}
                </div>
                {isOpen && (
                  <div className="absolute shadow-md rounded-xl w-[20vw] md:w-[150px] bg-white overflow-hidden right-8 top-28 text-sm">
                    <div className="flex flex-col cursor-pointer">
                      <MenuItem
                        onClick={onProfile}
                        label="Update Profile Pic"
                      />
                      <MenuItem onClick={onPassword} label="Change password" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <DashboardCard
            id="home"
            wallet={!!wallet && wallet}
            showDeposit={onDeposit}
            showWithdraw={onWithdraw}
          />

          <div className="flex flex-col px-8 my-10 bg-gray-200 py-7 rounded-xl ">
            <div className="grid grid-cols-[50px,_80px_1fr] w-full items-center mb-6">
              {/* <div className="-mt-4 "> */}
              <img
                className="w-20 h-16 -mt-2"
                src={Ethereum_logo}
                alt="Ethereum_logo"
              />
              {/* </div> */}
              <div>
                <p>ETH</p>
                <p className="text-sm text-gray-400">ERC20</p>
              </div>
              <div className="text-lg font-bold text-right justify-self-end">
                <p>{wallet?.eth?.toFixed(4)}</p>
                <p className="text-sm text-gray-400">
                  ~${formatToThousand(Number(usdRate * wallet?.eth).toFixed(2))}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[50px,_80px_1fr]">
              {/* <div className="w-20 h-16 m-auto"> */}
              <img
                className="w-20 h-16 -mt-3"
                src={Weth_logo}
                alt="Weth_logo"
              />
              {/* </div> */}
              <div>
                <p>WETH</p>
                <p className="text-sm text-gray-400">ERC20</p>
              </div>
              <div className="text-lg font-bold text-right justify-self-end">
                <p>{wallet?.weth?.toFixed(4)}</p>
                <p className="text-sm text-gray-400">
                  ~$
                  {formatToThousand(Number(usdRate * wallet?.weth).toFixed(2))}
                </p>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[350px]">
              {myNft?.map((el) => (
                <Card inDashboard={true} key={el.id} {...el} />
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
        {/* <SupportChat /> */}
      </div>
    )
  );
};
export default Dashboard;
