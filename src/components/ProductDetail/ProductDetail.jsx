import ColllectionCard from "../UI/CollectionCard";
import Activity from "./Activity";
import Description from "./Description";
import Detailtext from "./Detailtext";
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
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import Detailtext from './DetailText/DetailText'

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
  return (
    <>
      <Header />
      <div className="w-full px-10">
        <div className="flex gap-5 flex-col lg:flex-row">
          <Product />
          <Detailtext />
        </div>

        <Activity />
        <div className="border-solid border-[#eee] border rounded-[14px] mt-20 ">
          <p className="p-12 text-3xl font-bold font-poppins">
            More On Collection
          </p>
          <div className="grid w-full grid-cols-4 gap-20 mb-10 overflow-x-scroll bg-blue-50">
            {coll.map((lec) => (
              <ColllectionCard key={lec.image} {...lec} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
