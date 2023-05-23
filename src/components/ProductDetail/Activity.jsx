import React from "react";
import ActivityTable from "./ActivityTable";
import { BsArrowDownUp } from "react-icons/bs";

const Activity = () => {
  return (
    <div className="max-w-[12000px] mt-10 text-poppins font-poppins text-3xl mx-4 rounded-t-xl">
      <p className="flex px-8 border rounded-t-lg py-7">
        <BsArrowDownUp color="gray" />
        <span className="ml-4"> Item Activity</span>
      </p>

      <ActivityTable />
    </div>
  );
};

export default Activity;
