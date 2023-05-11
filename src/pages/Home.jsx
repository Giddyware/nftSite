import { useState } from "react";


import Collection from "../Container/Collection";
import background from "../assets/background.jpg";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Category/Categories";
import Header from "../components/Header/Header";
import ConnectWallet from "../components/UI/ConnectWallet";
import Overlay from "../components/UI/Overlay";
import AddFundModal from "../components/UI/AddFundsModal";
import SupportEngine from "../components/SupportChat/SupportEngine";
import ChatBox from "../components/ChatBox/ChatBox";

const Home = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const ModalStatus = () => {
    console.log("working");
    setShowModal((prev) => !prev);
  };

  return (
   
      <div className="relative w-full min-h-screen">
        <Overlay show={showModal} clear={ModalStatus} />
        {/* <ConnectWallet show={showModal} modalStatus={ModalStatus} /> */}
        <AddFundModal show={showModal} modalStatus={ModalStatus} />
        <div
          className=""
          style={{
            backgroundImage: `url(${background})`,
            "backdrop-filter": "blur(5px)",
          }}
        >
          <Header showModal={ModalStatus} />
          <Categories />
        </div>
        <Collection />
        <Cards />
        <SupportEngine />
        {/* <ChatBox /> */}
      </div>
   
  );
};
export default Home;
