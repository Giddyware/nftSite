import React from "react";

const Deposit = () => {
  return (
    <div className="h-[90vh] border-solid border mt-[5vh] border-black shadow-lg  mx-auto font-poppins text-[1rem]  justify-between flex flex-col px-8 py-12 max-w-xl rounded-[10px]">
      <p className="text-[2rem] px-[12px] font-bold">Deposit ETH</p>

      <div>
        <div className="w-[150px] h-[150px] border-solid border mx-auto mb-10"></div>
        <div className="flex flex-col text-center opacity-[0.7] text-[1.25rem] px-[12px]">
          <p>Send only ETH to theis deposit address</p>
          <p>
            This address does not support deposit of non-fungible token, please
            go to NFT page to deposit NFT
          </p>
        </div>
      </div>

      <div className=" px-[12px] gap-3  flex flex-col text-center opacity-[0.7] text-[1.25rem]">
        <p>Wallet Address</p>
        <p>0x204ed55d43e27c97d8b491276d7382290dc556b</p>
      </div>

      <div className="px-[12px] flex flex-col opacity-[0.7] text-[1.25rem] font-bold">
        Network
        <div>Ethereum(ECR20)</div>
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
    </div>
  );
};

export default Deposit;
