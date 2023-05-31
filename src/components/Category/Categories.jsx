import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CategoryLink = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="p-3 px-5 mb-5 cursor-pointer white hover:bg-gray-400 rounded-xl">
        {text}
      </div>
    </Link>
  );
};

const Categories = () => {
  const { t } = useTranslation();

  const list = [
    { text: `${t("home.all")}`, link: "/marketPlace" },
    { text: `${t("home.art")}`, link: "/art" },
    { text: `${t("home.gaming")}`, link: "/gaming" },
    { text: `${t("home.membership")}`, link: "/membership" },
    { text: `PFPs`, link: "/PFPs" },
    { text: `${t("home.photography")}`, link: "/photography" },
  ];

  return (
    <div className="flex justify-between px-5 my-5 text-white md:justify-start md:gap-5 md:text-3xl font-poppins ">
      {list.map((val) => {
        return <CategoryLink {...val} />;
      })}
    </div>
  );
};

export default Categories;
