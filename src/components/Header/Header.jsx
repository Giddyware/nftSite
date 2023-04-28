import Button from "../Button";

import { MdOutlineCastConnected } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FcWiFiLogo } from "react-icons/fc";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Headercomponent/Search";
import Logo from "../../assets/react.svg";
import DropDown from "./Headercomponent/dropDown/dropDown";

const Button_Details = () => {
  return (
    <Button>
      <div className="flex items-center gap-4 text-white">
        <div>
          <MdOutlineCastConnected size={24} />
        </div>
        <p className="font-bold">Connect Wallet</p>
        <div className="border-l-solid border-l-slate-500">
          <BiUserCircle size={24} />
        </div>
      </div>
    </Button>
  );
};

const CartButton = () => {
  return (
    <Button>
      <div className="flex items-center justify-center gap-4 text-white">
        <AiOutlineShoppingCart size={24} />
      </div>
    </Button>
  );
};
const Header = () => {
  return (
    <div className="flex flex-row items-center w-full gap-5 py-5">
      {/* <FcWiFiLogo fontSize={"10rem"} /> */}
      <div className="">
        <FcWiFiLogo size={50} />
      </div>
      <DropDown />
      <Search />
      <Button_Details />
      <CartButton />
    </div>
  );
};
export default Header;
