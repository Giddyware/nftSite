// import Image from "../../assets/nft/nft1.jpg";

const Card = ({
  imageWidth,
  photo,
  floor,
  totalVolume,
  priceInEtherium,
  name,
}) => {
  const BASE_URL = "http://31.220.31.111:3000";
  const imageURL = `${BASE_URL}${photo}`;
  return (
    // <div className="h-56">
    <a
      href="#"
      className="flex flex-col gap-2 rounded-lg shadow-lg bg-gray-100"
    >
      <div className="w-full">
        <img
          crossOrigin="anonymous"
          src={imageURL}
          alt=""
          className={`object-cover h-56 rounded-t-lg ${
            imageWidth === "full" ? "w-full" : "w-full"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="pb-4 text-sm font-bold">{name}</h3>
        <div className="flex justify-between font-bold">
          <div className="">
            <p className="text-gray-600">FLOOR</p>
            <p className="">{floor}ETH</p>
          </div>
          <div>
            <p className="text-gray-600">TOTAL VOLUME</p>
            <p>{priceInEtherium} ETH</p>
          </div>
        </div>
      </div>
    </a>
    // </div>
  );
};
export default Card;
