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

import Image1 from "../assets/nft/nft13.png";
import Image2 from "../assets/nft/nft14.png";
import Image3 from "../assets/nft/nft15.png";
import Image4 from "../assets/nft/nft16.png";
import Image5 from "../assets/nft/nft17.png";
import Image6 from "../assets/nft/nft18.png";
import Image7 from "../assets/nft/nft19.png";
import Image8 from "../assets/nft/nft20.png";
import Image9 from "../assets/nft/nft21.png";
import Image10 from "../assets/nft/nft22.png";
import Image11 from "../assets/nft/nft23.png";
import Image12 from "../assets/nft/nft24.png";
import Card from "../components/Cards/Card";

import FullCard from "../components/Cards/FullCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
  {
    nftName: "alone hill",
    id: "18932",
    imgUrl: Image1,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "ancient dog",
    id: "18293",
    imgUrl: Image2,
    floor: 1.2,
    totalVolume: 138933,
  },
  {
    nftName: "bosslady cat",
    id: "83229",
    imgUrl: Image3,
    floor: 0.8,
    totalVolume: 1289233,
  },
  {
    nftName: "Bossman cat",
    id: "5236",
    imgUrl: Image4,
    floor: 0.5,
    totalVolume: 45233,
  },
  {
    nftName: "Free",
    id: "87483",
    imgUrl: Image5,
    floor: 0.822,
    totalVolume: 483233,
  },
  {
    nftName: "Omo ukde",
    id: "3249",
    imgUrl: Image6,
    floor: 0.323,
    totalVolume: 75843,
  },
  {
    nftName: "Reflections",
    id: "1493",
    imgUrl: Image7,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "ocean life",
    id: "1823",
    imgUrl: Image8,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "wild held",
    id: "18430",
    imgUrl: Image9,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "sad child",
    id: "1hjd3",
    imgUrl: Image10,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "moody being",
    id: "1jkdx",
    imgUrl: Image11,
    floor: 2.3,
    totalVolume: 23233,
  },
  {
    nftName: "mysterious frame",
    id: "189i34j",
    imgUrl: Image12,
    floor: 2.3,
    totalVolume: 23233,
  },
];

const Home = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { user, isAuthenticated, error } = useSelector((state) => state.auth);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const ModalStatus = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="relative min-w-full min-h-screen">
      <Overlay show={showModal} clear={ModalStatus} />
      {/* <ConnectWallet show={showModal} modalStatus={ModalStatus} /> */}
      <AddFundModal show={showModal} modalStatus={ModalStatus} />
      <div className="w-full pb-20 backgroundFade">
        <Header showModal={ModalStatus} />
        <Categories />
        <div className="px-10">
          <Swiper
            slidesPerGroup={1}
            slidesPerView={"auto"}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
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
            // navigation={{
            //   prevEl: prevRef.current ? prevRef.current : undefined,
            //   nextEl: nextRef.current ? nextRef.current : undefined,
            // }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}

            // pagination={{ clickable: false }}
            // scrollbar={{ draggable: false }}
          >
            {data.map((artDatails) => (
              <SwiperSlide key={artDatails.id}>
                <FullCard {...artDatails} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Collection /> */}
      {/* <div className="bg-white"> */}

      <Link to="/category=arts">
        <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
          <Cards title={"arts"} />
        </div>
      </Link>

      <Link to="/category=gaming">
        <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
          <Cards title={"gaming"} />
        </div>
      </Link>

      <Link to="/category=membership">
        <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
          <Cards title={"membership"} />
        </div>
      </Link>

      <Link to="/category=pfps">
        <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
          <Cards title={"PFPs"} />
        </div>
      </Link>

      <Link to="/category=photography">
        <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
          <Cards title={"photography"} />
        </div>
      </Link>

      {/* </div> */}

      {/* <SupportEngine /> */}
      <Footer />
    </div>
  );
};
export default Home;
