import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="px-10 py-16 mt-32 text-white bg-[#665F5E] text-[16px]">
        <div className="flex flex-col justify-between border-b lg:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Stay in the loop</h2>
            <p className="text-lg">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating Artmint.
            </p>
            <div className="flex items-center">
              <div className="my-8 mr-5 w-96">
                <input
                  className="w-full p-2 text-black border-none rounded-lg"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <button className="px-5 py-3 bg-[#595252] rounded-lg">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="text-[16px] mb-32 ">
            <h2>Join the community</h2>
            <div className="flex mt-8">
              <div className="h-[36px] p-5 mr-4 bg-[#595252] w-[36px] rounded-lg hover:bg-[#515254] cursor-pointer">
                <FaTwitter />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-[#595252] w-[36px] rounded-lg hover:bg-[#515254] cursor-pointer">
                <FaDiscord />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-[#595252] w-[36px] rounded-lg hover:bg-[#515254] cursor-pointer">
                <FaInstagram />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-[#595252] w-[36px] rounded-lg hover:bg-[#515254] cursor-pointer">
                <SlSocialReddit />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-[#595252] w-[36px] rounded-lg hover:bg-[#515254] cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="grid my-32 lg:grid-cols-[320px_repeat(2,_1fr)] gap-x-32 grid-cols-1 md:grid-cols-3  gap-y-8 lg:gap-y-0">
          <div className=" mt--6">
            <div className="border-right-solid border-right-[1px] border-right-[white] w-48 md:w-24 mx-auto md:mx-0">
              <img className="w-full" src={Logo} alt="home" />
            </div>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5 ">
            <h1 className="font-bold">Marketplace</h1>
            <Link to={"/category=marketplace"}>All NFTs</Link>
            <Link to={"/category=art"}>Art</Link>
            <Link to={"/category=gaming"}>Gaming</Link>
            <Link to={"/category=membership"}>Membership</Link>
            <Link to={"/category=pfps"}>PFPs</Link>
            <Link to={"/category=photography"}>Photography</Link>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <h1 className="font-bold">My Account</h1>
            <Link to={"/dashboard"}>Profile</Link>
            <a href="">Favorites</a>
            <a href="">WatchList</a>
            <a href="">Collection</a>
          </div>
        </div>
      </div>
      <div className="px-10 py-8 text-white bg-[#665F5E] text-[16px] flex justify-between">
        <div>
          <p>© 2018 - 2023 Artmint, Inc</p>
        </div>
        <div className="flex gap-x-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
