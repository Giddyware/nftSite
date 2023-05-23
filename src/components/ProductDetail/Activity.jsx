import React from "react";
import ActivityTable from "./ActivityTable";
import { BsArrowDownUp } from "react-icons/bs";

const Activity = () => {
  return (
    <div className="mx-4 mt-10 text-3xl text-poppins font-poppins rounded-t-xl">
      <p className="flex px-8 border rounded-t-lg py-7">
        <BsArrowDownUp color="gray" />
        <span className="ml-4"> Item Activity</span>
      </p>

      <ActivityTable />
    </div>
  );
};

export default Activity;
