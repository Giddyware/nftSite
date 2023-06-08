import React from "react";
import { CgNotes } from "react-icons/cg";
import { GoVerified } from "react-icons/go";

const Description = ({ description, nftOwner }) => {
  return (
    <div className="w-full border-solid border-[#eee] border  font-poppins rounded-xl mt-10">
      <p className="flex gap-6 p-10 text-3xl border rounded-t-xl">
        <CgNotes />
        Description
      </p>

      <div className="p-10 text-xl">
        <div className="flex">
          <h3>By</h3>
          <span className="ml-2 font-bold hover:text-gray-500">
            {nftOwner?.username}
          </span>
          <span className="ml-2">
            {nftOwner?.userVerified ? <GoVerified color="#2081E2" /> : null}
          </span>
        </div>
        <div className="h-[210px] overflow-y-auto py-4">{description}</div>
      </div>
    </div>
  );
};

export default Description;
