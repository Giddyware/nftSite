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
import { useSelector } from "react-redux";
import { logoutUser } from "../../context/auth/authActions";
import { useDispatch } from "react-redux";
import { logout } from "../../context/auth/authSlice";

const Button_Details = ({ showModal }) => {
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const LogMeOut = () => {
    dispatch(logout());
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
            <p className="w-10 md:w-[80px] flex justify-center">
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
    <div className="flex flex-row items-center bg-gray-900 justify-between w-full gap-5 px-5 py-5 text-white font-poppins">
      <Link
        to="/"
        className="border-right-solid border-right-[1px] border-right-[white] w-48 md:w-52"
      >
        <img className="w-full" src={Logo} alt="" />
      </Link>

      <DropDown />
      <Search />
      <Button_Details showModal={showModal} />
      <CartButton />
    </div>
  );
};
export default Header;
