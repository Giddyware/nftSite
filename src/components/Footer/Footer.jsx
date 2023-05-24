import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FcWiFiLogo } from "react-icons/fc";
import { SlSocialReddit } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="px-10 py-16 mt-32 text-white bg-[#1868B7] text-[16px]">
        <div className="flex justify-between border-b flex-col lg:flex-row">
          <div>
            <h2 className="text-xl font-bold">Stay in the loop</h2>
            <p className="text-base">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
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
                <button className="px-5 py-3 bg-blue-500 rounded-lg">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="text-[16px] mb-32 ">
            <h2>Join the community</h2>
            <div className="flex mt-8">
              <div className="h-[36px] p-5 mr-4 bg-blue-500 w-[36px] rounded-lg hover:bg-blue-400">
                <FaTwitter />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-blue-500 w-[36px] rounded-lg hover:bg-blue-400">
                <FaDiscord />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-blue-500 w-[36px] rounded-lg hover:bg-blue-400">
                <FaInstagram />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-blue-500 w-[36px] rounded-lg hover:bg-blue-400">
                <SlSocialReddit />
              </div>
              <div className="h-[36px] p-5 mr-4 bg-blue-500 w-[36px] rounded-lg hover:bg-blue-400">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="grid my-32 lg:grid-cols-[320px_repeat(4,_1fr)] gap-x-32 grid-cols-3 gap-y-8 lg:gap-y-0">
          <div className="mt--6 ">
            <div className="border-right-solid border-right-[1px] border-right-[white] w-14 md:w-24">
              <FcWiFiLogo size={"100%"} />
            </div>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold">Marketplace</h1>
            <Link to={"/marketPlace"}>All NFTs</Link>
            <Link to={"/nfts/art"}>Art</Link>
            <Link to={"/nfts/gaming"}>Gaming</Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold">My Account</h1>
            <Link to={"/dashboard"}>Profile</Link>
            <a href="">Favorites</a>
            <a href="">WatchList</a>
            <a href="">Collection</a>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold">Resources</h1>
            <a href="">Blog</a>
            <a href="">Learn</a>
            <a href="">Help Center</a>
            <a href="">User Content FAQ</a>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold">Company</h1>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Ventures</a>
            <a href="">Grants</a>
          </div>
        </div>
      </div>
      <div className="px-10 py-8 text-white bg-[#1868B7] text-[16px] flex justify-between">
        <div>
          <p>© 2018 - 2023 Ozone Networks, Inc</p>
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
