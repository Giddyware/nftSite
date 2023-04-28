import DropDownBox from "./DropDownBox";
import Dropitems from "./Dropitems";

const DropDown = () => {
  return (
    <div className="flex items-center gap-5 text-3xl ">
      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> Drops </p>
          <div className="w-64 sub-menu">
            <DropDownBox values={["Featured", "Learn More"]} />
          </div>
        </li>
      </div>

      <div className="menu-bar">
        <li className="p-10 li bg-inherit">
          <p> Statsi </p>
          <div className="w-64 py-10 sub-menu">
            <DropDownBox values={["Rakings", "Activity"]} />
          </div>
        </li>
      </div>
    </div>
  );
};
export default DropDown;
