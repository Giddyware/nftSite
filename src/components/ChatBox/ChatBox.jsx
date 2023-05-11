import { Avatar } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  BsChevronDown,
  BsCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FcOnlineSupport } from "react-icons/fc";
import { SocketContext } from "../../context/socket";
import { styles } from "../SupportChat/styles";

const ChatBox = (props) => {
  const [showChat, setShowChat] = useState(false); //for Animation

  return (
    //   <div>
    //   { joined ? (
    //     <p>Click the button to send a request to join chat!</p>
    //   ) : (
    //     <p>Congratulations! You are accepted to join chat!</p>
    //   ) }
    //   <button onClick={handleJoinChat}>
    //     Join Chat
    //   </button>
    // </div>
    // <div className="w-[420px] px-8 py-5 h-[530px] bg-white rounded-xl fixed bottom-[116px] right-6 outline-red-200 outline-1 outline text-2xl">
    //   {/* Header */}
    //   <div className="">
    //     <div className="flex items-center gap-4">
    //       <Avatar />
    //       <h1>Hi there 👋</h1>
    //     </div>
    //     <div className="flex">
    //       <BsCircleFill color="green" size={10} />
    //       <p>We reply immediately</p>
    //     </div>
    //   </div>

    //   {/* main */}

    //   {/* form */}
    // </div>

    <div
      className="transition-5 w-full h-[18%]  rounded-x-2xl text-2xl text-white bg-gradient-to-bl from-sky-500 to-blue-800 flex justify-between items-center"
      style={{
        // ...styles.chatEngineWindow,
        ...{
          // height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      <div className="flex flex-col gap-6 my-2 ml-3">
        <div className="flex items-center gap-4">
          <Avatar />
          <h1>Hi there 👋</h1>
        </div>
        <div className="flex items-center gap-5">
          <BsCircleFill color="green" size={10} />
          <p>We reply immediately</p>
        </div>
      </div>
      <div className="flex gap-6 mx-3 my-8">
        <BsThreeDotsVertical />
        <BsChevronDown />
      </div>
    </div>
  );
};
export default ChatBox;
