import React, { useState, useEffect, useRef } from "react";
import { BsFillChatDotsFill, BsSendFill } from "react-icons/bs";
import io from "socket.io-client";
import { format, isSameDay } from "date-fns";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { IoAttachSharp } from "react-icons/io5";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [adminMessages, setAdminMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [adminMessages, userMessages]);

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    // Send the user message
    setUserMessages((prevMessages) => [
      ...prevMessages,
      { message, timestamp: new Date() },
    ]);
    setMessage("");

    // Implement the logic to send the message to the server
    // For example, using the socket.emit method
    // socket.emit('userMessage', message);
  };

  useEffect(() => {
    // Connect to the web socket
    const socket = io("https://alphapp.tech/"); // Replace with your server URL

    // Listen for admin messages
    socket.on("message", (message) => {
      console.log(message.data.message, "message==");
      setAdminMessages((prevMessages) => [
        ...prevMessages,
        { message, timestamp: new Date() },
      ]);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

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
        {adminMessages.length + userMessages.length > 0 && (
          <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-yellow-500 rounded-full -top-2 -right-2">
            {adminMessages.length + userMessages.length}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed z-10 bg-white min-h-[546px] min-w-[400px] rounded-3xl shadow-lg right-4 bottom-16 w-80">
          <div className="flex flex-col py-10 px-12 rounded-t-3xl text-white bg-[hsl(207,_50%,_54%)]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">Armint Customer service</h2>
              <button
                className="text-white hover:text-white focus:outline-none"
                onClick={toggleChat}
              >
                <MdCancel className="w-10 h-10 text-[hsl(207,_90%,_86%)]" />
              </button>
            </div>

            <p className="max-w-[280px]">
              Welcome to Armint live chat, Drop your message, our team will get
              in touch asap.
            </p>
          </div>
          <div className="flex items-center gap-2 py-10 border px-11 border-b-[1px] border-[hsla(0,_0%,_88%,_1)]">
            <RiErrorWarningLine className="self-start w-20 h-20" />
            <p className="text-base">
              Armint reminds you to pay attention to account security, please do
              not disclose your account, password, verification code, PIKEY
              Identity authentication kev and other security Information to
              anyone.
            </p>
          </div>
          <div
            className="flex-grow max-h-[400px] overflow-y-auto flex flex-col-reverse"
            ref={chatContainerRef}
          >
            <div className="flex flex-col justify-end h-full p-4 mt-auto">
              {/* Render user messages */}
              {userMessages.map((message, index) => (
                <div key={index} className="flex flex-col items-end mb-4">
                  <div className="flex items-center justify-end">
                    <img
                      src="/user-avatar.png"
                      alt="User Avatar"
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    <div className="max-w-xs px-4 py-2 text-white bg-[hsl(207,_50%,_54%)] rounded-lg">
                      {message.message}
                    </div>
                  </div>
                  <p className="text-xs text-right text-gray-500">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              ))}

              {/* Render admin messages */}
              {adminMessages.map((message, index) => (
                <div key={index} className="flex flex-col items-start mb-4">
                  <div className="flex items-center justify-start">
                    <img
                      src="/admin-avatar.png"
                      alt="Admin Avatar"
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    <div className="max-w-xs px-4 py-2 text-gray-800 bg-gray-200 rounded-lg">
                      {message.message}
                    </div>
                  </div>
                  <p className="text-xs text-left text-gray-500">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              ))}
            </div>

            <div className="fixed bg-white flex items-center max-w-[490px] px-4 py-3 h-48 mt-auto bottom-[45px]">
              <input
                type="text"
                className="flex-grow px-6 bg-[hsl(220,_14%,_96%)] w-[350px] py-4 border border-gray-300 rounded-l-lg outline-none focus:border-blue-500"
                placeholder="What can we help you with today?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <IoAttachSharp className="absolute w-10 h-10 text-gray-700 cursor-pointer right-20 hover:text-gray-400" />
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
