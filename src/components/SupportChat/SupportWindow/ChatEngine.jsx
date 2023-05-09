import { useEffect, useState } from "react";

import {
  ChatFeed,
  SingleChatSocket,
  useSingleChatLogic,
} from "react-chat-engine-advanced";

const ChatEngine = (props) => {
  const [showChat, setShowChat] = useState(false);  //for Animation

  // const projectId =;
  const chatId = 1001;
  const chatAccessKey = 1234;
  const senderUsername = "Test123";
  const chatProps = useSingleChatLogic(
    "ecfa0435-edb4-43e9-9106-b5ebc93a94b0",
    chatId,
    chatAccessKey
  );

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });

  return (
    <div
      className="transition-5"
      style={{
        ...styles.chatEngineWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      {showChat && (
        <>
          <SingleChatSocket
            projectId={"ecfa0435-edb4-43e9-9106-b5ebc93a94b0"}
            chatId={1001}
            chatAccessKey={1234}
            userName={props.user.email}
            username={props.user.email}
            userSecret={props.user.email}
            {...chatProps}
          />

          <ChatFeed
            {...chatProps}
            username={props.user.email}
            // activeChat={props.chat.length !== null ? props.chat.id : "null"
            // }
          />
        </>
      )}
    </div>
  );
};

export default ChatEngine;

const styles = {
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};

// import {
//   ChatSocket,
//   ChatFeed,
//   useSingleChatLogic,
// } from "react-chat-engine-advanced";

// const projectId = "1ed59673-1fd6-46ed-9eb9-56239a6a4f82";
// const chatId = 1001;
// const chatAccessKey = "ca-a25d4523-52d6-22ed-9fb2-5f52df5fd5d2";
// const senderUsername = "Adam";

// export const Example = () => {
//   // 1. Declare chatProps = useSingleChatLogic
//   return (
//     <>
//       // 2. Pass chatProps into ChatFeed
//       <ChatFeed {...chatProps} username={senderUsername} />
//       // 3. Pass chatProps into SingleChatSocket
//       <SingleChatSocket {...chatProps} />
//     </>
//   );
// };
