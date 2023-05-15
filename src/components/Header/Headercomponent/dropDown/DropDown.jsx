import DropDownBox from "./DropDownBox";
import Dropitems from "./Dropitems";
import { useTranslation } from "react-i18next";


const DropDown = () => {
  const {t} = useTranslation()

  return (
    <div className=" items-center gap-5 md:text-3xl hidden md:flex">
      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> {t('home.drops')} </p>
          <div className="w-80 sub-menu">
            <DropDownBox values={["Featured", "Learn More"]} />
          </div>
        </li>
      </div>

      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> {t('home.stat')} </p>
          <div className="w-80 py-10 sub-menu">
            <DropDownBox values={["Ratings", "Activity"]} />
          </div>
        </li>
      </div>
    </div>
  );
};
export default DropDown;
