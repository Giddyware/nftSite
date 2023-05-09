import { useState } from "react";
import { AiOutlineClose, AiOutlineScan } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import Weth_logo from "../../assets/weth_logo.png";
import Ethereum_logo from "../../assets/Ethereum_logo.png";

const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <>
      <div
        className="fixed mx-auto sm:left-[30%] sm:top-[15%] h-[70%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
        <h1 className="font-bold text-4xl">Select Coin </h1>

        <p className="my-4">What coin would you like to deposit?</p>
        <div className="my-9 flex flex-col gap-8">
          <div className="px-6 py-10 rounded-xl bg-gray-100 hover:bg-gray-300 cursor-pointer">
            <div className="grid grid-cols-[40px,_80px_1fr] w-full items-center ">
              <div>
                <img className="w-7" src={Ethereum_logo} alt="Ethereum_logo" />
              </div>
              <p>ETH</p>
              <p className="justify-self-end">~128938</p>
            </div>
            <div className="flex justify-between ml-[40px] text-gray-400">
              <p>EHT</p>
              <p>~839</p>
            </div>
          </div>

          <div className="px-6 py-10 rounded-xl bg-gray-100 hover:bg-gray-300 cursor-pointer">
            <div className="grid grid-cols-[40px,_80px_1fr] w-full items-center ">
              <div>
                <img className="w-7" src={Weth_logo} alt="Weth_logo" />
              </div>
              <p>WETH</p>
              <p className="justify-self-end">~128938</p>
            </div>
            <div className="flex justify-between ml-[40px] text-gray-400">
              <p>WETH</p>
              <p>~839</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed mx-auto sm:left-[30%] sm:top-[15%] h-[70%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
        {/* <p className="mt-10 mb-4">Address</p>
        <input
          className="w-full  text-black rounded-lg p-6 border-4 active:border-gray-200"
          type="text"
          placeholder="Your address goes here"
        /> */}

        <label
          for="address-icon"
          className="block mb-2  font-bold text-gray-900 dark:text-white"
        >
          Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {/* <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg> */}

            <CgProfile className="text-gray-500" />
            <AiOutlineScan className="text-gray-500 mx-3" />
          </div>
          <input
            type="text"
            id="address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-6  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <label
          for="address-icon"
          className="block my-8  font-bold text-gray-900 dark:text-white"
        >
          Network
        </label>
        <p className="font-bold text-2xl">Ethereum (ERC-20)</p>
        <div className="">
          <input
            type="text"
            id="address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-6  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </>
  );
};
export default Withdraw;
