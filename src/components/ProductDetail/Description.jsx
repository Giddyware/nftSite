import React from "react";
import { CgNotes } from "react-icons/cg";

const Description = () => {
  return (
    <div className="w-full border-solid border-[#eee] border  font-poppins rounded-xl mt-10">
      <p className="flex gap-6 p-10 text-3xl border rounded-t-xl">
        <CgNotes />
        Description
      </p>
      <p className="p-10 text-xl bg-[#FBFDFF]">
        <p className="">
          By
          <span className="ml-2 font-bold">Remilia</span>
        </p>
        <div className="h-[210px] overflow-y-auto py-4">
          Milady Maker is a collection of 10,000 generative pfpNFT's in a
          neochibi aesthetic inspired by Tokyo street style tribes. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Similique
          asperioresjcksd iure magnam nostrum saepe, ipsa animi cumque quasi
          debitis molestiae veniam voluptate quidem quaerat dignissimos tempore
          ab inventore recusandae laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus, excepturi libero velit autem
          inventore est. Tenetur corporis dicta consectetur, repudiandae odit
          mollitia, blanditiis officiis maiores eum, fuga minima est recusandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          praesentium veniam facere distinctio quia numquam quidem, porro beatae
          fuga ratione architecto necessitatibus nam fugiat totam at. Amet iure
          quas consequatur! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque, sunt. Quidem natus ullam nostrum consectetur, accusantium
          qui asperiores saepe et nulla, iusto repellendus a tenetur porro
          laboriosam sit, nihil cum. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Delectus nesciunt quaerat error quas a, saepe,
          doloribus obcaecati tenetur nobis id voluptate quidem, sint
        </div>
      </p>
    </div>
  );
};

export default Description;
