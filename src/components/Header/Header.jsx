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
import { getUserDetails, logoutUser } from "../../context/auth/authActions";
import { useDispatch } from "react-redux";
import { logout } from "../../context/auth/authSlice";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

import avatar from "../../assets/avatar.png";

const Button_Details = () => {
  const { t } = useTranslation();
  const { isAuthenticated, isEmailVerified } = useSelector(
    (state) => state.auth
  );
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
  const dispatch = useDispatch();
  const { userDetails, isAuthenticated, isEmailVerified } = useSelector(
    (state) => state.auth
  );
  const { photo, userVerified, username } = userDetails;

  // console.log(user, "user");

  useEffect(() => {
    dispatch(getUserDetails());
    console.log(userDetails, "userDetails====");
  }, []);
  const baseUrl = "https://alphapp.tech";
  const imgUrl = `${baseUrl}${photo}`;
  return (
    // <Button>
    //     <div className="flex items-center justify-center gap-4 text-white w-7 md:w-[24px] ">
    //       <CgProfile size={"100%"} />
    //     </div>
    // </Button>
    isAuthenticated ? (
      <Link to="/dashboard" state={{ from: location }}>
        <div className="flex justify-center bg-transparent rounded-lg font-poppins item-baseline glass__effect">
          <div className="w-10 h-10">
            <img
              className="w-full h-full border border-white border-solid rounded-full"
              src={photo && imgUrl}
              alt=""
              crossOrigin="anonymous"
            />
          </div>
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
      </Link>
    ) : null
  );
};
const Header = ({ addBg }) => {
  return (
    <div
      className={
        addBg
          ? `bg-[#665F5E] flex flex-row items-center justify-between w-full gap-5 px-5 py-5 text-white font-poppins`
          : "flex flex-row items-center justify-between w-full gap-5 px-5 py-5 text-white bg-transparent font-poppins"
      }
    >
      <Link
        to="/"
        className="border-right-solid border-right-[1px] border-right-black w-48 md:w-52"
      >
        <img className="w-full" src={Logo} alt="" />
      </Link>

      {/* <DropDown /> */}
      <Search />
      <Button_Details />
      <ProfileButton />
    </div>
  );
};
export default Header;
