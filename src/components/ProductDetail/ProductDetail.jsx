import ColllectionCard from "../UI/CollectionCard";
import Activity from "./Activity";
import Description from "./Description";
import DetailText from "./DetailText/DetailText";
import Product from "./Product";
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
import Logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { CgLoadbar } from "react-icons/cg";
import { BiErrorCircle } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { getCategory, selectProduct } from "../../context/nft/nftActions";
import NotFound from "../../pages/NotFound";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import HomeCard from "../Cards/HomeCard";
import Cards from "../Cards/Cards";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const coll = [
  {
    name: "Milady ",
    image: Image1,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image2,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image3,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image4,
    num: 2.3,
    price: 23233,
  },
];

const ProductDetail = () => {
  const title = "art";
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const lowerCaseTitle = title.toLowerCase();
  const { selectedItem, categories, isLoading, error } = useSelector(
    (state) => state.product
  );
  const { id, photo, description, name, nftOwner, priceInEtherium, category } =
    selectedItem;
  useEffect(() => {
    dispatch(selectProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    const lowerCaseTitle = title.toLowerCase();
    dispatch(getCategory(lowerCaseTitle));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error === "this Nft already belong to you") {
    return (
      <div>
        {toast.warning("This NFT is already yours! \n \n Try to buy other", {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-message",
        })}
        <Navigate to={"/marketPlace"} />
      </div>
    );
  }

  if (error === "you don't have enough balance to buy this Nft") {
    return (
      <div>
        {toast.warning(
          "You don't have enough balance to buy this NFT. \n  \n Kindly fund your wallet to make your purchase",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          }
        )}
        <Navigate to={"/marketPlace"} />
      </div>
    );
  }

  if (!selectedItem) {
    return <Loading />;
  }

  console.log(selectedItem, "selectedItem");

  return (
    <>
      <Header addBg={true} />
      <div className="w-full px-10 mt-8 md:mt-12 ">
        <div className="flex flex-col gap-5 lg:flex-row">
          <Product photo={photo} />
          <DetailText
            productId={id}
            description={description}
            name={name}
            priceInEtherium={priceInEtherium}
            nftOwner={nftOwner}
          />
        </div>

        {/* <Activity /> */}
        <div className="border-solid border-[#eee] border rounded-[14px] mt-20 ">
          <p className="p-12 text-3xl font-bold font-poppins">
            More On Collection
          </p>
          {/* <div className="grid w-full grid-cols-4 gap-20 py-5 mb-10 overflow-x-scroll">
            {coll.map((lec) => (
              <HomeCard key={lec.image} {...lec} />
            ))}
          </div> */}
          <div className="lg:min-w-[1312px] mt-20 min-h-[330px]">
            {/* <Cards title={"PFPs"} /> */}
            <div className="flex items-center  w-full px-10 my-10 min-h-[300px]">
              <div
                className="absolute left-0 z-50 hidden text-white bg-white rounded-full cursor-pointer shadow:4xl h-fit prevNav md:block "
                ref={prevRef}
              >
                <MdOutlineNavigateBefore size={50} color="grey" />
              </div>
              <Swiper
                slidesPerGroup={1}
                centeredSlides={true}
                slidesPerView={"auto"}
                lazyPreloadPrevNext={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                    centeredSlides: true,
                  },
                  1000: {
                    slidesPerView: 4.5,
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
                    .filter((item) => item.category == category)
                    .map((nft) => (
                      <SwiperSlide key={nft.id}>
                        <Link to={`/products/${nft.id}`}>
                          <HomeCard {...nft} />
                        </Link>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
