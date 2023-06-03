import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineScan } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import Weth_logo from "../../assets/weth.png";
import Ethereum_logo from "../../assets/eth.png";
import { FaEthereum } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  WithdrawInEth,
  WithdrawInWeth,
} from "../../context/transaction/transactionActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const schema = z.object({
  coin: z.string().nonempty("Please select a coin of your choice"),
  amount: z.number(),
  address: z.string().nonempty("Please enter your address here"),
});
const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);
  const [coin, setCoin] = useState("");
  const dispatch = useDispatch();
  const { response, isLoading, error } = useSelector(
    (state) => state.transaction
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    // response.success && toast.success(`${response.message}`);
    if (!!response) {
      toast.success(`${response?.message}🎉`);
    }
    if (response?.status == "error") {
      toast.error(`${response?.message}😥`);
    }

    console.log(response, error, "response===");
  }, [response]);

  const onSubmit = (data) => {
    console.log("data======", data.amount);
    if (data.coin == "ETH") {
      dispatch(WithdrawInEth(data.amount));
    }
    if (data.coin == "WETH") {
      dispatch(WithdrawInWeth(data.amount));
    }

    reset();
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <form
        className="absolute top-0 right-0 left-0 bottom-0 mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between w-full">
          <h1 className="mb-3 text-4xl font-bold">Withdraw</h1>
          <button className="relative font-bold" onClick={() => modalStatus()}>
            X
          </button>
        </div>

        <p className="">What coin would you like to deposit?</p>

        <div className="my-10">
          <label
            htmlFor="coins"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Select a coin
          </label>
          <select
            id="coins"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("coin")}
            onChange={handleChange}
          >
            <option disabled>Make a choice</option>
            {/* <option value="ETH">ETH</option> */}
            <option value="WETH">WETH</option>
          </select>
        </div>
        <label
          htmlFor="address"
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
            id="address"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your address"
            {...register("address")}
          />
        </div>

        <div className="">
          <label
            htmlFor="network"
            className="block my-8 font-bold text-gray-900 dark:text-white"
          >
            Enter amount
          </label>
          {/* <p className="text-2xl font-bold">Ethereum (ERC-20)</p> */}
          <input
            type="number"
            id="network"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <button
            className="py-5 mt-10 text-[#2196F3] capitalize px-7 bg-[#2196F3]"
            type="submit"
          >
            submit
          </button>
        </div>
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
