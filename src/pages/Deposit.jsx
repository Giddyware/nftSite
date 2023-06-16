import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCodeGenerator from "../components/QRCodeGenerator";
import Loading from "../components/Loading/Loading";
import { getUserDetails } from "../context/auth/authActions";
import Overlay from "../components/UI/Overlay";
import CopyOnClick from "../components/CopyOnClick";

const Deposit = ({ show, modalStatus }) => {
  const { userDetails, isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Overlay show={show} clear={modalStatus} />
      {userDetails && (
        <div
          className="fixed top-0 right-0 left-0 bottom-0  mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
          style={{
            transform: show ? "translateY(0)" : "translateY(-1500px)",
            opacity: show ? "1" : "0",
            transition: "all 1s",
          }}
        >
          <div className="flex justify-between w-full mb-4">
            <h1 className="text-[2rem] px-[12px] font-bold">Deposit ETH</h1>
            <button
              className="relative font-bold"
              onClick={() => modalStatus()}
            >
              X
            </button>
          </div>

          <div>
            <div className="w-[150px]  h-[150px] border-solid border mx-auto mb-10">
              <QRCodeGenerator qrCode={userDetails?.wallet?.qrCode} />
            </div>
            <div className="flex flex-col text-center opacity-[0.7] text-[1.25rem] px-[12px]">
              <p className="text-left">Send only ETH to this deposit address</p>
            </div>
          </div>

          <div className=" px-[12px] gap-3 mb-8 flex flex-col text-center opacity-[0.7] text-[1.25rem]">
            <p className="mt-5 font-semibold text-left">Wallet Address</p>
            <div className="text-2xl font-extrabold text-left text-black">
              <span className="text-black">
                {userDetails?.wallet?.address}
                <CopyOnClick text={userDetails?.wallet?.address} />
              </span>
            </div>
          </div>

          <div className="px-[12px] flex flex-col opacity-[0.7] text-[1.25rem] font-bold">
            Network
            <div>Ethereum({userDetails?.wallet?.network})</div>
          </div>

          <div className=" px-[12px] flex flex-col font-poppins font-[400] bg-[grey] text-white text-[1.25rem] rounded-b-[10px]">
            <div className="flex justify-between text-[1rem] text-white py-3">
              <p className="opacity-[0.7]">Minimum deposit</p>
              <p>0.0000000001ETH</p>
            </div>
            <div className="flex justify-between text-[1rem] py-3">
              <p className="opacity-[0.7] ">Expected arrival</p>
              <p>12 network confirmation</p>
            </div>
            <div className="flex justify-between text-[1rem] py-3">
              <p className="opacity-[0.7]">Expected unlock</p>
              <p>64 network confirmation</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default Deposit;
