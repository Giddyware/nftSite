import Button from "../Button";

import { MdOutlineCastConnected } from "react-icons/md";
import { BiChevronUp, BiUserCircle } from "react-icons/bi";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Headercomponent/Search";
import Logo from "../../assets/logo.png";
import DropDown from "./Headercomponent/dropDown/DropDown";
import { useState } from "react";
import { useEffect } from "react";
import Connect from "./ConnectWallet/Connect";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../context/auth/authActions";
import { useDispatch } from "react-redux";
import { logout } from "../../context/auth/authSlice";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

import avatar from "../../assets/avatar.png";

const Button_Details = ({ showModal }) => {
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const LogMeOut = () => {
    dispatch(logout());
    Cookies.remove("authToken");
  };

  return (
    <Button>
      <div className="flex justify-center  cursor-pointer py-[3px] items-center gap-4 text-white">
        {/* <p
          className="font-bold text-md md:text-2xl"
          // onClick={() => showModal()}
        ></p> */}
        <div className="border-l-solid border-l-slate-500 wallet-menu-bar">
          <Link
            to={!isAuthenticated ? "/auth" : null}
            className="li"
            onClick={() => LogMeOut()}
          >
            <p className="w-full md:w-[80px] flex justify-center">
              {!isAuthenticated ? (
                <span>Login/ SignUp</span>
              ) : (
                <span>LogOut</span>
              )}
            </p>
          </Link>
        </div>
      </div>
    </Button>
  );
};

const ProfileButton = () => {
  const location = useLocation().pathname;
  return (
    <Button>
      <Link to="/dashboard" state={{ from: location }}>
        <div className="flex items-center justify-center gap-4 text-white w-7 md:w-[24px] ">
          <CgProfile size={"100%"} />
        </div>
      </Link>
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
  let username;
  let userVerified;
  return (
    <div className="flex flex-row items-center justify-between w-full gap-5 px-5 py-5 text-white bg-transparent font-poppins">
      <Link
        to="/"
        className="border-right-solid border-right-[1px] border-right-black w-48 md:w-52"
      >
        <img className="w-full" src={Logo} alt="" />
      </Link>

      {/* <DropDown /> */}
      <Search />
      <Button_Details showModal={showModal} />
      {/* <ProfileButton /> */}
      <div className="flex justify-center px-4 py-2 bg-transparent rounded-lg item-center">
        <img
          className="border border-white border-solid rounded-full h-14 w-14"
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
  );
};
export default Header;
