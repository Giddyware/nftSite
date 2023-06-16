import React, { useState, useEffect, useRef } from "react";
import { BsFillChatDotsFill, BsSendFill } from "react-icons/bs";
import io from "socket.io-client";
import { format, isSameDay } from "date-fns";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { IoAttachSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../context/transaction/transactionActions";
import { getUserDetails } from "../context/auth/authActions";

const SupportChat = () => {
  const { userDetails } = useSelector((state) => state.auth);

  // const adminChat = userDetails?.chat?.filter((e) => e.role === "admin");

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [messages, setMessages] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const BASE_URL = "https://alphapp.tech";

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    dispatch(getUserDetails);
    setMessages([...userDetails?.chat]);
  }, [dispatch]);

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const sendMessage = () => {
    if (message.trim() === "" && !selectedImage) {
      return;
    }

    if (selectedImage) {
      const formData = new FormData();
      formData.append("message", message);
      formData.append("photo", selectedImage);

      dispatch(createChat(formData));
    } else {
      dispatch(createChat({ message, timestamp: new Date() }));
    }

    setMessage("");
    setSelectedImage(null);
  };

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("message", (message) => {
      console.log(message, "message===");

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message.data.message,
          timestamp: new Date(),
          photo: message.data.photo,
        },
      ]);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleUserMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // console.log(file);
    setSelectedImage(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  const formatTimestamp = (timestamp) => {
    if (isSameDay(timestamp, new Date())) {
      return format(timestamp, "h:mm a");
    } else {
      return format(timestamp, "dd MMM yyyy");
    }
  };

  return (
    <div className="fixed z-10 right-4 bottom-4">
      <div
        className={`bg-[hsl(207,_89%,_86%)] rounded-full p-5 cursor-pointer ${
          isOpen ? "bg-[hsl(207,_50%,_54%)]" : ""
        }`}
        onClick={toggleChat}
      >
        <BsFillChatDotsFill className="w-14 h-14 text-[hsl(207,_90%,_54%)]" />
        {/* {adminMessages.length + userMessages.length > 0 && (
          <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-yellow-500 rounded-full -top-2 -right-2">
            {adminMessages.length + userMessages.length}
          </div>
        )} */}
      </div>

      {isOpen && (
        <div className="fixed z-10 bg-white min-h-[546px] min-w-[400px] rounded-3xl shadow-lg right-4 bottom-16 w-80">
          <div className="flex flex-col py-10 px-12 rounded-t-3xl text-white bg-[hsl(207,_50%,_54%)]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">Artmint Customer service</h2>
              <button
                className="text-white hover:text-white focus:outline-none"
                onClick={toggleChat}
              >
                <MdCancel className="w-10 h-10 text-[hsl(207,_90%,_86%)]" />
              </button>
            </div>

            <p className="max-w-[280px]">
              Welcome to Artmint live chat, Drop your message, our team will get
              in touch asap.
            </p>
          </div>
          <div className="flex items-center gap-2 py-10 border px-11 border-b-[1px] border-[hsla(0,_0%,_88%,_1)]">
            <RiErrorWarningLine className="self-start w-20 h-20" />
            <p className="text-base">
              Artmint reminds you to pay attention to account security, please
              do not disclose your account, password, verification code, PIKEY
              Identity authentication kev and other security Information to
              anyone.
            </p>
          </div>
          <div
            className="flex-grow max-h-[400px] overflow-y-auto flex flex-col-reverse"
            ref={chatContainerRef}
          >
            <div className="flex flex-col justify-end h-full p-4 mt-auto mb-20">
              {!!messages &&
                messages.map((message, index) => {
                  console.log("message", message);
                  const isAdminMessage = userDetails?.chat
                    ?.filter((e) => e.role === "admin")
                    ?.includes(message);

                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-${
                        isAdminMessage ? "start" : "end"
                      } mb-4`}
                    >
                      <div
                        className={`flex items-${
                          isAdminMessage ? "start" : "end"
                        } justify-${isAdminMessage ? "start" : "end"}`}
                      >
                        {message?.photo && (
                          <img
                            src={`${BASE_URL}${message.photo}`}
                            crossOrigin="anonymous"
                            alt={`${
                              isAdminMessage ? "Admin" : "User"
                            } Message Image`}
                            className={`object-cover w-28 h-28 mr-2 rounded-lg ${
                              isAdminMessage ? "" : "self-end"
                            }`}
                          />
                        )}

                        <div
                          className={`max-w-xs px-4 py-2 block rounded-lg ${
                            isAdminMessage
                              ? "text-gray-800 bg-gray-200"
                              : "text-white bg-[hsl(207,_50%,_54%)]"
                          }`}
                        >
                          {message.message}
                        </div>
                      </div>
                      <p className="text-xs text-left text-gray-500">
                        {/* {formatTimestamp(message.timestamp || message.date)} */}
                      </p>
                    </div>
                  );
                })}
            </div>

            <div className="fixed bg-white flex items-center max-w-[490px] px-4 py-3 h-20 mt-auto bottom-[45px]">
              <input
                type="text"
                className="flex-grow px-6 bg-[hsl(220,_14%,_96%)] w-[350px] py-4 border border-gray-300 rounded-l-lg outline-none focus:border-blue-500 relative"
                placeholder="What can we help you with today?"
                value={message}
                onChange={handleUserMessage}
                onKeyPress={handleKeyPress}
              />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="absolute w-10 h-10 right-28"
                />
              )}
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <IoAttachSharp className="absolute w-10 h-10 text-gray-700 cursor-pointer right-2 -top-5 hover:text-gray-400" />
              </label>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                className="px-4 py-6 text-white bg-[hsl(207,_50%,_54%)] rounded-r-lg hover:bg-[hsl(207,51%,39%)]"
                onClick={sendMessage}
              >
                <BsSendFill className="h-full text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChat;
