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
import WithdrawalSubmitted from "../WithdrawalSubmitted";

const schema = z.object({
  coin: z.string().nonempty("Please select a coin of your choice"),

  address: z.string().nonempty("Please enter your address here"),

  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount is required and  must be a number",
    })
    .positive("You can't withdraw less than zero"),
});

const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);
  // const [addressError, setAddressError] = useState("");
  const [showWithdrawalSubmitted, setShowWithdrawalSubmitted] = useState(false);

  const [coin, setCoin] = useState("");
  const dispatch = useDispatch();
  const { response, isLoading, error } = useSelector(
    (state) => state.transaction
  );
  const { userDetails } = useSelector((state) => state.auth);

  const handlePaste = async () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      try {
        const text = await navigator.clipboard.readText();
        setValue("address", text); // Set the value of 'address' input
      } catch (error) {
        console.error("Failed to read clipboard text:", error);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onWithdrawSubmit = () => {
    setShowWithdrawalSubmitted((prev) => !prev);
  };
  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  useEffect(() => {
    if (!!response) {
      // toast.success(`${response?.message}🎉`);
      modalStatus();
      onWithdrawSubmit();
    }
    if (response?.status == "error") {
      toast.error(`${response?.message}😥`);
    }
  }, [response]);

  const onSubmit = (data) => {
    const { amount } = data;

    if (data.amount >= userDetails?.wallet?.weth) {
      modalStatus();
      toast.error(`You don't have up to ${amount} WETH in your WETH Account`, {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
      return;
    }

    if (data.coin == "WETH") {
      dispatch(WithdrawInWeth(amount));
    }
    reset();
  };
  return (
    <>
      <WithdrawalSubmitted
        show={showWithdrawalSubmitted}
        modalStatus={onWithdrawSubmit}
      />
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
            <div className="text-red-500  col-span-6 font-semibold tracking-[-0.21px]">
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
            id="address"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Enter your address"
            {...register("address")}
            onChange={(e) => setValue("address", e.target.value)}
          />
          {/* {console.log(errors, "errors")} */}
          {errors.address && (
            <div className="text-red-500 text-xl mt-2 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.address.message}
            </div>
          )}
        </div>

        <div className="">
          <div className="flex items-baseline justify-between">
            <div>
              <label
                htmlFor="amount"
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

          <input
            type="number"
            step="any"
            id="amount"
            className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
          {errors.amount && (
            <div className="text-red-500 text-xl mt-2 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.amount.message}
            </div>
          )}
        </div>

        <h3 className="my-10 text-2xl text-gray-600">
          ETH bal:{" "}
          <span className="font-bold">
            {formatToThousand(userDetails?.wallet?.eth.toFixed(4))} ETH
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
    </>
  );
};
export default Withdraw;
