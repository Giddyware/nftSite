import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

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
import Footer from "../components/Footer/Footer";

import Image1 from "../assets/nft/nft1.jpg";
import Image2 from "../assets/nft/nft2.jpg";
import Image3 from "../assets/nft/nft3.jpg";
import Image4 from "../assets/nft/nft4.jpg";
import Image5 from "../assets/nft/nft5.jpg";
import Image6 from "../assets/nft/nft6.jpg";
import Image7 from "../assets/nft/nft7.jpg";
import Image8 from "../assets/nft/nft8.png";
import Image9 from "../assets/nft/nft9.jpg";
import Image10 from "../assets/nft/nft10.png";
import Image11 from "../assets/nft/nft11.jpg";
import Image12 from "../assets/nft/nft12.jpg";
import Card from "../components/Cards/Card";
import FullCard from "../components/Cards/fullCard";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
  {
    id: "18932",
    imgUrl: Image1,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "18293",
    imgUrl: Image2,
    floor: 1.2,
    totalVolume: 138933,
  },
  {
    id: "83229",
    imgUrl: Image3,
    floor: 0.8,
    totalVolume: 1289233,
  },
  {
    id: "5236",
    imgUrl: Image4,
    floor: 0.5,
    totalVolume: 45233,
  },
  {
    id: "87483",
    imgUrl: Image5,
    floor: 0.822,
    totalVolume: 483233,
  },
  {
    id: "3249",
    imgUrl: Image6,
    floor: 0.323,
    totalVolume: 75843,
  },
  {
    id: "1493",
    imgUrl: Image7,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1823",
    imgUrl: Image8,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "18430",
    imgUrl: Image9,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1hjd3",
    imgUrl: Image10,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "1jkdx",
    imgUrl: Image11,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    id: "189i34j",
    imgUrl: Image12,
    floor: 2.3,
    totalVolume: 23233,
  },
];

const Home = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const ModalStatus = () => {
    console.log("working");
    setShowModal((prev) => !prev);
  };

  return (
    <div className="relative w-full min-h-screen">
      <Overlay show={showModal} clear={ModalStatus} />
      {/* <ConnectWallet show={showModal} modalStatus={ModalStatus} /> */}
      <AddFundModal show={showModal} modalStatus={ModalStatus} />
      <div className="pb-20 backgroundFade">
        <Header showModal={ModalStatus} />
        <Categories />
        <div className="px-10">
          <Swiper
            slidesPerGroup={4}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            modules={[Navigation, Autoplay, Pagination, A11y]}
            // navigation={true}
            navigation={{
              prevEl: prevRef.current ? prevRef.current : undefined,
              nextEl: nextRef.current ? nextRef.current : undefined,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}

            // pagination={{ clickable: false }}
            // scrollbar={{ draggable: false }}
          >
            {data.map((artDatails) => (
              <SwiperSlide>
                <FullCard
                  key={artDatails.id}
                  imageWidth={"full"}
                  {...artDatails}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Collection /> */}
      <Cards title={"Art"} />
      <Cards title={"Gaming"} />
      <Cards title={"Membership"} />
      <Cards title={"PFPs"} />
      <Cards title={"Photography"} />

      {/* <SupportEngine /> */}
      <Footer />
    </div>
  );
};
export default Home;
