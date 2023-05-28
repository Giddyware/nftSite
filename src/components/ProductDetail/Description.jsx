import React from "react";
import { CgNotes } from "react-icons/cg";

const Description = ({ description, nftOwner }) => {
  return (
    <div className="w-full border-solid border-[#eee] border  font-poppins rounded-xl mt-10">
      <p className="flex gap-6 p-10 text-3xl border rounded-t-xl">
        <CgNotes />
        Description
      </p>
      <p className="p-10 text-xl bg-[#FBFDFF]">
        <p className="">
          By
          <span className="ml-2 font-bold">{nftOwner?.username}</span>
        </p>
        <div className="h-[210px] overflow-y-auto py-4">{description}</div>
      </p>
    </div>
  );
};

export default Description;
