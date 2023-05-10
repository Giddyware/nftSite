import React from "react";
import { useTranslation } from "react-i18next";

const Category = ({ text }) => {
  
  return (
    <div className="white px-5 hover:bg-[grey] cursor-pointer rounded-xl p-3 mb-5">
      {text}
    </div>
  );
};

const Categories = () => {
  const {t} = useTranslation()


  const lis = [`${t('home.all')}`, `${t('home.art')}`, `${t('home.gaming')}`, `${t('home.membership')}`, "PFPs", `${t('home.photography')}`];

  return (
    <div className="flex justify-between md:justify-start md:gap-5 px-5 my-5 md:text-3xl text-white font-poppins ">
      {lis.map((val) => {
        return <Category text={val} />;
      })}
    </div>
  );
};

export default Categories;
