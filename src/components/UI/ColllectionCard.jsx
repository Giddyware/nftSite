import axios from "axios";
import React from "react";
import { BsCart } from "react-icons/bs";

const ColllectionCard = ({ photo, name, num, price }) => {
  const BASE_URL = "http://31.220.31.111:3000";
  const imageURL = `${BASE_URL}${photo}`;
  // console.log(imageURL);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(imageURL);
  //     const data = response;
  //     // console.log(data);
  //     // Process the data or update the state
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error
  //   }
  // };

  // // Call the fetchData function to initiate the GET request
  // fetchData();

  return (
    <div className="flex flex-col gap-5 text-2xl font-bold font-poppins rounded-xl shadow-xl  bg-white cursor-pointer collectioncard relative ">
      <div className="w-[100%] h-[200px] overflow-hidden rounded-t-xl">
        {photo ? (
          <img
            src={imageURL}
            alt={name}
            className="w-[100%] h-[100%]  flex items-center ease-linear mx-auto object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-between gap-4 px-7">
        <p>
          {name} <span>{num}</span>
        </p>
        <div>{price}</div>
      </div>
      <div className="px-7 text-[#eee] mb-5">Last Sale: 0.69eth</div>

      <button className="bg-blue-500  rounded-b-[12px] flex absolute bottom-0 w-full pl-8 overflow-hidden">
        <div className="flex items-center flex-1 text-white ">
          {" "}
          <div className="w-full pt-3 text-center"> Buy Now </div>
        </div>{" "}
        <div className="border-l-solid border-l-[1px] border-2-[black] px-2 h-full justify-center">
          <div className="flex items-center justify-center pt-3">
            <BsCart color="white" fontStyle={"bold"} />{" "}
          </div>{" "}
        </div>
      </button>
    </div>
  );
};

export default ColllectionCard;
