import { useEffect, useState } from "react";
import { TbNetwork } from "react-icons/tb";

import Header from "../components/Header/Header";
import profile from "../assets/cover/pfps_banner.jpg";
import background from "../assets/cover/pfps_profile.jpg";
import { pfpsText } from "../utils/textData";
import CollectionTabs from "../components/Tabs";
import CollectionCard from "../components/UI/CollectionCard";

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
import { useDispatch, useSelector } from "react-redux";
import { CgLoadbar } from "react-icons/cg";
import { BiErrorCircle } from "react-icons/bi";
import { getPfpsCategory } from "../context/nft/nftActions";
import { Link, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Category/Categories";
import HomeCard from "../components/Cards/HomeCard";

const Pfps = ({ name }) => {
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const { pfps, isLoading, error } = useSelector((state) => state.product);

  // Get the current pathname
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    dispatch(getPfpsCategory());
  }, [getPfpsCategory]);

  console.log(pfps, "pfps===");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <BiErrorCircle />
      </div>
    );
  }

  const handleChange = () => {};

  return (
    <div className="relative w-full h-screen">
      <div
        className="h-[20%] md:h-[40%] lg:h-[40%]"
        style={{
          backgroundImage: `url(${background})`,
          "backdrop-filter": "blur(5px)",
          // height: "40%",
          objectFit: "contain",
        }}
      >
        <Header />
        <Categories />
        <div className="w-36 h-36 md:w-48 md:h-48 rounded   border-4 md:rounded-3xl absolute bottom-[-32px] left-10">
          <img src={profile} className="rounded md:rounded-3xl" />
        </div>
      </div>
      <div className="m-10 mt-20">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[30px] capitalize">{name}</h1>
          <div>
            <TbNetwork />
          </div>
        </div>

        <div className="w-[85%]">
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-6">
              Items <span className="font-bold">1,071</span>
            </p>

            <p>
              Chain <span className="font-bold">Ethereum</span>
            </p>
          </div>
        </div>

        <p className="w-[85%] my-10 text-[14px]">
          {showMore ? pfpsText : `${pfpsText.substring(0, 150)}`}{" "}
          <b className="cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "...See more"}
          </b>
        </p>

        <div className="flex gap-6 flex-wrap text-[14px]">
          <p className="flex flex-col mr-6">
            <span className="font-bold">1 ETH</span> <span>total volume</span>
          </p>

          <p className="flex flex-col mr-6">
            <span className="font-bold">1%</span>
            <span>listed</span>
          </p>
          <p className="flex flex-col mr-6">
            <span className="font-bold">63</span>
            <span>owners</span>
          </p>
          <p className="flex flex-col mr-6">
            <span className="font-bold">6%</span>
            <span>unique owners</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 m-10 md:grid-cols-3 lg:grid-cols-4">
        {pfps?.data?.map((nft) => (
          <li key={nft.id}>
            <Link to={`/products/${nft.id}`}>
              <HomeCard {...nft} />
            </Link>
          </li>
        ))}
      </div>

      <Footer />
    </div>
  );
};
export default Pfps;
