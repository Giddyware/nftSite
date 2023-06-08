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
import { useEffect } from "react";
import { selectProduct } from "../../context/nft/nftActions";
import NotFound from "../../pages/NotFound";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import HomeCard from "../Cards/HomeCard";

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
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selectedItem, isLoading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(selectProduct(productId));
  }, [dispatch, productId]);

  if (isLoading) {
    return (
      <div>
        Loading...
        <CgLoadbar />
      </div>
    );
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

  const { id, photo, description, name, nftOwner, priceInEtherium } =
    selectedItem;
  return (
    <>
      <Header addBg={true} />
      <div className="w-full px-10 mt-8 md:mt-12 ">
        <div className="flex gap-5 flex-col lg:flex-row">
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
          <div className="grid py-5 w-full grid-cols-4 gap-20 mb-10 overflow-x-scroll bg-blue-50">
            {coll.map((lec) => (
              <HomeCard key={lec.image} {...lec} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
