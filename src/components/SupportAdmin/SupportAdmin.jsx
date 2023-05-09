// import { ChatEngine } from "react-chat-engine-advanced";
import ChatEngine from "../SupportChat/SupportWindow/ChatEngine.jsx";

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID={import.meta.env.VITE_PROJECT_ID}
      userName="Test123"
      userSecret="1234"
      height="calc(100vh - 12px)"
    />
  );
};

export default SupportAdmin;
