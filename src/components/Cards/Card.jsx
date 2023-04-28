// import Image from "../../assets/nft/nft1.jpg";

const Card = ({ imgUrl, floor, totalVolume }) => {
  // console.log(artDatails);
  return (
    // <div className="h-56">
    <a href="#" className="flex flex-col gap-2 rounded-lg shadow-lg">
      <div className="w-full">
        <img
          src={imgUrl}
          alt=""
          className="object-cover w-full h-56 rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="pb-4 text-sm font-bold">ASM Brains</h3>
        <div className="flex justify-between font-bold">
          <div className="">
            <p className="text-gray-600">FLOOR</p>
            <p className="">{floor}ETH</p>
          </div>
          <div>
            <p className="text-gray-600">TOTAL VOLUME</p>
            <p>{totalVolume} ETH</p>
          </div>
        </div>
      </div>
    </a>
    // </div>
  );
};
export default Card;
