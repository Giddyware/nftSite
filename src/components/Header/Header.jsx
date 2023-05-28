import Button from "../Button";

import { MdOutlineCastConnected } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Headercomponent/Search";
import Logo from "../../assets/logo.png";
import DropDown from "./Headercomponent/dropDown/DropDown";
import { useState } from "react";
import { useEffect } from "react";
import Connect from "./ConnectWallet/Connect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Button_Details = ({ showModal }) => {
  const { t } = useTranslation();

  return (
    <Button>
      <div className="flex items-center gap-4 text-white">
        <div className="w-10 md:w-[20px] cursor:pointer">
          <MdOutlineCastConnected size={"100%"} />
        </div>
        <p
          className="font-bold cursor-pointer text-md md:text-2xl"
          // onClick={() => showModal()}
        >
          {/* {t("home.connect_wallet")} */}
        </p>
        <div className="border-l-solid border-l-slate-500 wallet-menu-bar">
          <Link to={"/auth"} className="li ">
            <p className=" w-10 md:w-[80px] flex">
              {/* <BiUserCircle size={"100%"} /> */}
              <span>Login/ SignUp</span>
            </p>
            <div className="w-[10rem] wallet-sub-menu">{/* <Connect /> */}</div>
          </Link>
        </div>
      </div>
    </Button>
  );
};

const CartButton = () => {
  return (
    <Button>
      <div className="flex items-center justify-center gap-4 text-white w-7 md:w-[24px] ">
        <AiOutlineShoppingCart size={"100%"} />
      </div>
    </Button>
  );
};
const Header = ({ showModal }) => {
  const [bg, setBg] = useState(false);

  const check = () => {
    if (window.scrollY > 20) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div
      className="flex flex-row items-center justify-between w-full gap-5 px-5 py-5 text-white font-poppins"
      style={{ background: bg ? "white" : "none" }}
    >
      {/* <FcWiFiLogo fontSize={"10rem"} /> */}
      <div className="border-right-solid border-right-[1px] border-right-[white] w-14 md:w-48">
        <img className="w-full" src={Logo} alt="" />
      </div>

      <DropDown />
      <Search />
      <Button_Details showModal={showModal} />
      <CartButton />
    </div>
  );
};
export default Header;
