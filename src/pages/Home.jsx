import { useEffect, useRef, useState } from "react";
import Collection from "../Container/Collection";
import background from "../assets/background.jpg";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Category/Categories";
import Header from "../components/Header/Header";
import ConnectWallet from "../components/UI/ConnectWallet";
import Overlay from "../components/UI/Overlay";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bg, setBg] = useState(false);

  const contRef = useRef(null);

  const check = () => {
    console.log(document.ayo.scrollTop);
    if (window.scrollTo > 20) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  const ModalStatus = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div
      className="relative w-full h-screen overflow-y-scroll ayo"
      ref={contRef}
      onScroll={() => check()}
    >
      <Overlay show={showModal} clear={ModalStatus} />
      <ConnectWallet show={showModal} modalStatus={ModalStatus} />
      <div className="">
        <div
        // Z-index here is to put the header on the other components
          className="fixed z-[100] top-0 w-full"
          style={{
            backgroundImage: bg ? "white" : `url(${background})`,
            "backdrop-filter": "blur(5px)",
          }}
        >
          <Header showModal={ModalStatus} />
        </div>
      </div>
      <div className="relative top-[20%]">
        <Categories />
        <Collection />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
