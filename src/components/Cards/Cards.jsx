import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
// import "swiper/modules/navigation/navigation"; // Navigation module
// import "swiper/modules/pagination/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import Image1 from "../../assets/nft/nft1.jpg";
import Image2 from "../../assets/nft/nft2.jpg";
import Image3 from "../../assets/nft/nft3.jpg";
import Image4 from "../../assets/nft/nft4.jpg";
import Image5 from "../../assets/nft/nft5.jpg";
import Image6 from "../../assets/nft/nft6.jpg";
import Image7 from "../../assets/nft/nft7.jpg";
import Image8 from "../../assets/nft/nft8.png";
import Image9 from "../../assets/nft/nft9.jpg";
import Image10 from "../../assets/nft/nft10.png";
import Image11 from "../../assets/nft/nft11.jpg";
import Image12 from "../../assets/nft/nft12.jpg";
import { useEffect, useRef } from "react";
import { BsFullscreenExit } from "react-icons/bs";
import HomeCard from "./HomeCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../context/nft/nftActions";
import Loading from "../Loading/Loading";

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

const Cards = ({ title }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dispatch = useDispatch();

  const lowerCaseTitle = title.toLowerCase();
  console.log(lowerCaseTitle, "lowerCaseTitle");
  const { categories, isLoading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const lowerCaseTitle = title.toLowerCase();
    dispatch(getCategory(lowerCaseTitle));
    console.log(categories, lowerCaseTitle);
  }, [getCategory]);

  // const lowerCaseTitle = title.toLowerCase();
  // const artsCategory = categories.filter((item) => item.category == "art");
  // console.log(artsCategory,'artsCategory');
  return (
    <>
      <h1 className="px-10 mt-8 text-3xl font-bold capitalize font-poppins">
        {title}
      </h1>
      <div className="flex items-center  w-full px-10 my-10 min-h-[300px]">
        <div
          className="absolute left-0 z-50 hidden text-white bg-white rounded-full cursor-pointer shadow:4xl h-fit prevNav md:block "
          ref={prevRef}
        >
          <MdOutlineNavigateBefore size={50} color="grey" />
        </div>
        <Swiper
          slidesPerGroup={3}
          centeredSlides={true}
          slidesPerView={"auto"}
          lazyPreloadPrevNext={true}
          breakpoints={{
            320: {
              slidesPerView: 0.5,
              spaceBetween: 40,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1000: {
              slidesPerView: 5.5,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          loop={true}
          modules={[Navigation, Pagination, A11y]}
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
          {categories &&
            categories
              .filter((item) => item.category == "membership")
              .map((artDatails) => (
                <SwiperSlide key={artDatails.id}>
                  <HomeCard {...artDatails} />
                </SwiperSlide>
              ))}
          {categories &&
            lowerCaseTitle == "pfps" &&
            categories
              .filter((item) => item.category === "pfps")
              .map((artDatails) => (
                <SwiperSlide key={artDatails.id}>
                  <HomeCard {...artDatails} />
                </SwiperSlide>
              ))}
          {categories &&
            lowerCaseTitle == "arts" &&
            categories
              .filter((item) => item.category == "arts")
              .map((artDatails) => (
                <SwiperSlide key={artDatails.id}>
                  <HomeCard {...artDatails} />
                </SwiperSlide>
              ))}

          {categories &&
            lowerCaseTitle == "gaming" &&
            categories
              .filter((item) => item.category == "gaming")
              .map((artDatails) => (
                <SwiperSlide key={artDatails.id}>
                  <HomeCard {...artDatails} />
                </SwiperSlide>
              ))}

          {categories &&
            lowerCaseTitle == "photography" &&
            categories
              .filter((item) => item.category == "photography")
              .map((artDatails) => (
                <SwiperSlide key={artDatails.id}>
                  <HomeCard {...artDatails} />
                </SwiperSlide>
              ))}
        </Swiper>
        <div
          className="absolute right-0 z-50 hidden text-white bg-white rounded-full shadow cursor-pointer h-fit prevNav md:block"
          ref={nextRef}
        >
          <MdOutlineNavigateNext size={50} color="grey" />
        </div>
      </div>
    </>
  );
};
export default Cards;
