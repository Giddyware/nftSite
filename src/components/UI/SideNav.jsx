import { FaMoneyCheck } from "react-icons/fa";

import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { useTranslation } from "react-i18next";

const DashboardLinks = ({ hash, name, icon }) => {
  console.log(hash);
  return (
    <div className="flex items-center justify-start">
      {icon}
      <p className="p-5 text-lg">{name}</p>
    </div>
  );
};

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

const SideNav = ({ refs }) => {
  const {t} = useTranslation()
  return (
    <div className="">
      {/* TODO: Make the SideNav component */}
      <div className="bg-gray-100 min-h-full py-8">
        <a
          href="#"
          className="flex items-center justify-center p-2 pb-8 border-b"
        >
          <img className="w-80" src={Logo} alt="logo" />
          {/* <h1 className="text-2xl font-bold capitalize">OPENSEA</h1> */}
        </a>
        <ul className="my-10 ">
          <li className="px-5 py-6 ml-20">
            <DashboardLinks
              icon={<MdSummarize size={"10%"} />}
              name={t('dashboard.account_summary')}
            />
          </li>
          <li
            className="px-5 py-6 ml-20"
            onClick={() => {
              console.log(refs.nftRef, "nftRef");
              refs.nftRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<MdOutlineCollections size={"10%"} />}
              name={t('dashboard.NFT_Collection')}
            />
          </li>
          <li className="px-5 py-6 ml-20">
            <DashboardLinks
              icon={<MdCreate size={"10%"} />}
              name={t('dashboard.Mint_Create')}
              hash="/mint"
            />
          </li>
          <li
            className="px-5 py-6 ml-20"
            onClick={() => {
              console.log(refs.transactionRef, "transactionRef");

              refs.transactionRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<GrTransaction size={"10%"} />}
              name={t('dashboard.transaction')}

            />
          </li>

          <li
            className="px-5 py-6 ml-20"
            onClick={() => {
              console.log(refs.saleRef, "salesRef");
              refs.saleRef.current.scrollIntoView();
            }}
          >
            {/* <Link to="/#RecentSalesTable"> */}
            <DashboardLinks
              icon={<GiTakeMyMoney size={"10%"} />}
              name={t('dashboard.sales')}
              // hash="/#RecentSalesTable"
            />
            {/* </Link> */}
          </li>
          <li className="px-5 py-6 ml-20">
            <DashboardLinks
              icon={<BiSupport size={"10%"} />}
              name={t('dashboard.support')}

            />
          </li>
          <li className="px-5 py-6 ml-20">
            <DashboardLinks
              icon={<GiReceiveMoney size={"10%"} />}
              name={t('dashboard.withdraw/deposit')}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
