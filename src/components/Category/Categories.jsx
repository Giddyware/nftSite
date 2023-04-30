import React from "react";

const lis = ["All", "Art", "Gaming", "Memberships", "PFPs", "Photography"];

const Category = ({ text }) => {
  return (
    <div className="white px-5 hover:bg-[grey] cursor-pointer rounded-xl p-3 mb-5">
      {text}
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex justify-between md:justify-start md:gap-5 px-5 my-5 md:text-3xl text-white font-poppins ">
      {lis.map((val) => {
        return <Category text={val} />;
      })}
    </div>
  );
};

export default Categories;
