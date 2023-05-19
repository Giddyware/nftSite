import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { FcSettings } from "react-icons/fc";

const ConnectItem = [
  {
    title: "Profile",
    logo: <HiOutlineUser />,
  },
  { title: "Watchlist", logo: <BsEyeFill /> },
  { title: "My Collections", logo: <AiOutlineTable /> },
  { title: "Create", logo: <BsEyeFill /> },
  { title: "Watchlist", logo: <BsEyeFill /> },
  {
    title: "Help Center",
    logo: <FiHelpCircle />,
  },
  {
    title: "Settings",
    logo: <FcSettings />,
  },
];

const Connect = () => {
  return (
    <ul className="bottom-0 right:10 z-50 bg-white rounded-lg py-[10px] text-3xl mt-2 font-lato">
      {ConnectItem.map((item) => (
        <li className="flex gap-4 px-4 text-left w-fit">
          <p> {item.title} </p> <div>{item.logo}</div>
        </li>
      ))}
    </ul>
  );
};
export default Connect;
