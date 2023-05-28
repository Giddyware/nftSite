import { useState } from "react";
import { AiOutlineClose, AiOutlineScan } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import Weth_logo from "../../assets/weth_logo.png";
import Ethereum_logo from "../../assets/Ethereum_logo.png";
import { FaEthereum } from "react-icons/fa";

const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <>
      <form
        className="fixed mx-auto sm:left-[30%] sm:top-[15%] overflow-y-auto h-[80%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
        <h1 className="text-4xl font-bold mb-3">Deposit </h1>

        <p className="">What coin would you like to deposit?</p>
        {/* 
        <div className="flex flex-col gap-8 my-9">
          <div className="px-6 py-4 bg-gray-100 cursor-pointer rounded-xl hover:bg-gray-300">
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

          <div className="px-6 py-4 bg-gray-100 cursor-pointer rounded-xl hover:bg-gray-300">
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
        </div> */}
        <div className="my-10">
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Select an coin
          </label>
          <select
            id="coins"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled>Make a choice</option>
            <option className="border border-3" value="US">
              ETH
              <FaEthereum />
            </option>
            <option value="US">WETH</option>
          </select>
        </div>
        <label
          htmlFor="address-icon"
          className="block mb-2 font-bold text-gray-900 dark:text-white"
        >
          Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <CgProfile className="text-gray-500" />
            <AiOutlineScan className="mx-3 text-gray-500" />
          </div>
          <input
            type="text"
            id="address-icon"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <label
          htmlFor="address-icon"
          className="block my-8 font-bold text-gray-900 dark:text-white"
        >
          Network
        </label>
        <p className="text-2xl font-bold">Ethereum (ERC-20)</p>
        <div className="">
          <input
            type="text"
            id="address-icon"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button className="mt-7" type="submit">
          withdraw
        </button>
      </form>

      {/* <div
        className="fixed mx-auto sm:left-[30%] sm:top-[15%] h-[70%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
      </div> */}
    </>
  );
};
export default Withdraw;
