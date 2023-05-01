import Button from "../Button";

import { MdOutlineCastConnected } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FcWiFiLogo } from "react-icons/fc";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Headercomponent/Search";
import Logo from "../../assets/react.svg";
import DropDown from "./Headercomponent/dropDown/dropDown";
import { useState } from "react";
import { useEffect } from "react";
import Connect from "./ConnectWallet/Connect";


const Button_Details = ({showModal}) => {
  return (
    <Button>
      <div className="flex items-center gap-4 text-white">
        <div className="w-10 md:w-[20px]">
          <MdOutlineCastConnected size={"100%"} />
        </div>
        <p className="font-bold text-md md:text-2xl cursor-pointer" onClick={() => showModal()}>Connect Wallet</p>
        <ul className="border-l-solid border-l-slate-500 wallet-menu-bar">
          <li className="li">
            <p className="cursor:pointer w-10 md:w-[20px]"><BiUserCircle size={"100%"} /></p>
          <div className="w-[10rem] wallet-sub-menu">
          <Connect />
          </div>
          </li>

        </ul>
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
const Header = ({showModal}) => {
  const [bg, setBg] = useState(false)

  const check = () => {
    if(window.scrollY > 20) {
      setBg(true)
    }
    else{
      setBg(false)
    }
  }

  useEffect(() => {
    check()
  }, [])



  return (
    <div className="flex flex-row items-center w-full gap-5 py-5 px-5 text-white justify-between font-poppins" style={{"background": bg?"white":"none"}}>
      {/* <FcWiFiLogo fontSize={"10rem"} /> */}
      <div className="border-right-solid border-right-[1px] border-right-[white] w-14 md:w-24">
        <FcWiFiLogo size={"100%"} />
      </div>
      
      <DropDown />
      <Search />
      <Button_Details showModal={showModal}/>
      <CartButton />
    </div>
  );
};
export default Header;