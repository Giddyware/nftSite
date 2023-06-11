// import React, { useState, useEffect } from "react";
// import { BsFillChatDotsFill } from "react-icons/bs";
// import io from "socket.io-client";

// const SupportChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [adminMessages, setAdminMessages] = useState([]);
//   const [userMessages, setUserMessages] = useState([]);

//   const toggleChat = () => {
//     setIsOpen((prevIsOpen) => !prevIsOpen);
//   };

//   const sendMessage = () => {
//     if (message.trim() === "") {
//       return;
//     }

//     // Send the user message
//     setUserMessages((prevMessages) => [...prevMessages, message]);
//     setMessage("");

//     // Implement the logic to send the message to the server
//     // For example, using the socket.emit method
//     // socket.emit('userMessage', message);
//   };

//   useEffect(() => {
//     // Connect to the web socket
//     const socket = io("http://localhost:3000"); // Replace with your server URL

//     // Listen for admin messages
//     socket.on("adminMessage", (message) => {
//       setAdminMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Clean up the socket connection
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="fixed z-10 right-4 bottom-4">
//       <div
//         className={`bg-[hsl(207,_89%,_86%)] rounded-full p-5 cursor-pointer ${
//           isOpen ? "bg-[hsl(207,_90%,_54%)]" : ""
//         }`}
//         onClick={toggleChat}
//       >
//         <BsFillChatDotsFill className="w-20 h-20 text-[hsl(207,_90%,_54%)]" />
//         {adminMessages.length + userMessages.length > 0 && (
//           <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-yellow-400 rounded-full -top-2 -right-2">
//             {adminMessages.length + userMessages.length}
//           </div>
//         )}
//       </div>

//       {isOpen && (
//         <div className="fixed z-10 bg-white min-h-[546px] min-w-[400px] rounded-3xl shadow-lg right-4 bottom-16 w-80">
//           <div className="flex items-center justify-between px-4 py-2 text-white bg-[hsl(207,_90%,_54%)]">
//             <h2 className="text-lg font-medium">Support Chat</h2>
//             <button
//               className="text-white hover:text-white focus:outline-none"
//               onClick={toggleChat}
//             >
//               <BsFillChatDotsFill className="w-6 h-6" />
//             </button>
//           </div>
//           <div className="p-4">
//             {/* Render user messages */}
//             {userMessages.map((message, index) => (
//               <div key={index} className="flex flex-col items-end mb-4">
//                 <div className="flex items-center justify-end">
//                   <div className="max-w-xs px-4 py-2 text-white bg-blue-500 rounded-lg">
//                     {message}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Render admin messages */}
//             {adminMessages.map((message, index) => (
//               <div key={index} className="flex flex-col items-start mb-4">
//                 <div className="flex items-center justify-start">
//                   <div className="max-w-xs px-4 py-2 text-gray-800 bg-gray-200 rounded-lg">
//                     {message}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center px-4 py-2">
//             <input
//               type="text"
//               className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg outline-none focus:border-blue-500"
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600"
//               onClick={sendMessage}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SupportChat;


import React, { useState, useEffect } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import io from "socket.io-client";
import { format, isSameDay } from "date-fns";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [adminMessages, setAdminMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

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
    const socket = io("http://localhost:3000"); // Replace with your server URL

    // Listen for admin messages
    socket.on("adminMessage", (message) => {
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
          isOpen ? "bg-[hsl(207,_90%,_54%)]" : ""
        }`}
        onClick={toggleChat}
      >
        <BsFillChatDotsFill className="w-20 h-20 text-[hsl(207,_90%,_54%)]" />
        {adminMessages.length + userMessages.length > 0 && (
          <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-yellow-400 rounded-full -top-2 -right-2">
            {adminMessages.length + userMessages.length}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed z-10 bg-white min-h-[546px] min-w-[400px] rounded-3xl shadow-lg right-4 bottom-16 w-80">
          <div className="flex items-center justify-between px-4 py-2 text-white bg-[hsl(207,_90%,_54%)]">
            <h2 className="text-lg font-medium">Support Chat</h2>
            <button
              className="text-white hover:text-white focus:outline-none"
              onClick={toggleChat}
            >
              <BsFillChatDotsFill className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4">
            {/* Render user messages */}
            {userMessages.map((message, index) => (
              <div key={index} className="flex flex-col items-end mb-4">
                <div className="flex items-center justify-end">
                  <img
                    src="/user-avatar.png"
                    alt="User Avatar"
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  <div className="max-w-xs px-4 py-2 text-white bg-blue-500 rounded-lg">
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

          <div className="flex items-center px-4 py-2">
            <input
              type="text"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg outline-none focus:border-blue-500"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChat;
