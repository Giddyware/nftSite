import { useEffect, useRef, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineLoading,
  AiOutlineScan,
} from "react-icons/ai";
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
import Overlay from "./Overlay";

import PasteOnClick from "../PasteOnClick";
import { formatToThousand } from "../../utils/formatToThousand";
import { getUserDetails } from "../../context/auth/authActions";

const schema = z.object({
  coin: z.string().nonempty("Please select a coin of your choice"),
  // amount: z.number().nonempty("please enter the amount your want to withdraw"),
  amount: z
    .number("Please enter a valid number")
    .refine((value) => value !== undefined && value !== null, {
      message: "Please enter a valid number.",
    }),
});
const AddressSchema = z.object({
  address: z.string().nonempty("Please enter your address here"),
});

const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);
  const [addressError, setAddressError] = useState("");

  const [coin, setCoin] = useState("");
  const dispatch = useDispatch();
  const { response, isLoading, error } = useSelector(
    (state) => state.transaction
  );
  const { userDetails } = useSelector((state) => state.auth);

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handlePaste = (text) => {
    setInputValue(text);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
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
    dispatch(getUserDetails());
  }, []);

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
    console.log("data======", data);
    // if (data.coin == "ETH") {
    //   dispatch(WithdrawInEth(data.amount));
    // }

    // Manually validate the address field using Zod
    // const addressValidation = AddressSchema.parse({ address: data. }).validate(
    //   data
    // );
    // if (addressValidation.error) {
    //   setAddressError(addressValidation.error.message);
    //   return;
    // }
    // setAddressError("");
    if (data.amount > userDetails?.wallet?.weth) {
      toast.error(
        `You don't have up to ${data.amount} WETH in your WETH Account`
      );
      return;
    }
    if (data.coin == "WETH") {
      dispatch(WithdrawInWeth(data.amount));
    }

    reset();
  };
  return (
    <>
      <Overlay show={show} clear={modalStatus} />
      <form
        className="fixed top-0 right-0 left-0 bottom-0 mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
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

        <div className="my-10">
          <label htmlFor="coins" className="block mb-2 font-bold text-gray-900">
            Select a coin
          </label>
          <select
            id="coins"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5  "
            {...register("coin")}
            // onChange={handleChange}
          >
            <option disabled>Make a choice</option>
            {/* <option value="ETH">ETH</option> */}
            <option value="WETH">WETH (ERC20)</option>
          </select>
          {errors.coin && (
            <div className="text-red-400 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.coin.message}
            </div>
          )}
        </div>
        <label htmlFor="address" className="flex mb-2 font-bold text-gray-900">
          <span className="mr-auto">Address</span>
          <PasteOnClick onPaste={handlePaste} />
        </label>
        <div className="relative">
          <input
            type="text"
            // ref={inputRef}
            id="address"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Enter your address"
            value={inputValue}
            onChange={handleInputChange}
            // {...register("address")}
          />
          {addressError && (
            <div className="text-red-400 col-span-6 font-semibold tracking-[-0.21px]">
              {addressError}
            </div>
          )}
        </div>

        <div className="">
          <div className="flex items-baseline justify-between">
            <div>
              <label
                htmlFor="network"
                className="block w-full mt-8 mb-2 font-bold text-gray-900 "
              >
                <span>Enter amount</span>
              </label>
            </div>
            <span className="text-2xl text-gray-600">
              WETH bal:{" "}
              <span className="font-bold">
                {formatToThousand(userDetails?.wallet?.weth.toFixed(4))}{" "}
                <span className="text-lg">WETH</span>{" "}
              </span>
            </span>
          </div>
          {/* <p className="text-2xl font-bold">Ethereum (ERC-20)</p> */}
          <input
            type="number"
            id="network"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
          {errors.amount && (
            <div className="text-red-400 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.amount.message}
            </div>
          )}
        </div>
        {/* <p className="mt-3 text-2xl text-gray-600">
          fee: 20% <span className="font-bold">~20 ETH</span>
        </p> */}

        <h3 className="my-10 text-2xl text-gray-600">
          ETH bal:{" "}
          <span className="font-bold">
            {formatToThousand(userDetails?.wallet?.eth)} ETH
          </span>
        </h3>

        <button className="w-full mt-10 capitalize bg-[#2196F3] hover:bg-[#7cbdf3]  text-white p-4 md:p-6">
          {isLoading ? (
            <span>
              submitting
              <AiOutlineLoading className="inline ml-3 animate-spin" />
            </span>
          ) : (
            <span>submit</span>
          )}
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
