import React from "react";

const lis = ["All", "Art", "Gaming", "Memberships", "PFPs", "Photography"];

const Category = ({ text }) => {
  return (
    <div className="white px-5 hover:bg-[grey] hover:pointer rounded-xl p-3">
      {text}
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex gap-5 px-5 my-5 text-3xl text-white font-poppins ">
      {lis.map((val) => {
        return <Category text={val} />;
      })}
    </div>
  );
};

export default Categories;
