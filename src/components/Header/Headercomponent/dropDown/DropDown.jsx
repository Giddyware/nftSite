import DropDownBox from "./DropDownBox";
import Dropitems from "./Dropitems";

const DropDown = () => {
  return (
    <div className=" items-center gap-5 md:text-3xl hidden md:flex">
      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> Drops </p>
          <div className="w-80 sub-menu">
            <DropDownBox values={["Featured", "Learn More"]} />
          </div>
        </li>
      </div>

      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> Stats </p>
          <div className="w-80 py-10 sub-menu">
            <DropDownBox values={["Ratings", "Activity"]} />
          </div>
        </li>
      </div>
    </div>
  );
};
export default DropDown;
