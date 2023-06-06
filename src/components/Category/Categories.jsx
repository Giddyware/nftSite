import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CategoryLink = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="p-3 px-5 mb-5 cursor-pointer white font-semibold hover:bg-gray-400 rounded-xl">
        {text}
      </div>
    </Link>
  );
};

const Categories = () => {
  const { t } = useTranslation();

  const list = [
    { text: `${t("home.all")}`, link: "/category=marketplace" },
    { text: `${t("home.art")}`, link: "/category=arts" },
    { text: `${t("home.gaming")}`, link: "/category=gaming" },
    { text: `memberships`, link: "/category=membership" },
    { text: `PFPs`, link: "/category=pfps" },
    { text: `${t("home.photography")}`, link: "/category=photography" },
  ];

  return (
    <div className="flex justify-between capitalize px-5 my-5 md:my-12 text-white md:justify-start md:gap-5 md:text-2xl font-poppins">
      {list.map((val) => {
        return <CategoryLink key={val.link} {...val} />;
      })}
    </div>
  );
};

export default Categories;
