import Dropitems from "./Dropitems";

const DropDownBox = ({ values }) => {
  return (
    <ul className="bottom-0 z-50 w-64 bg-white rounded-lg ">
      {values.map((val) => (
        <Dropitems item={val} />
      ))}
    </ul>
  );
};
export default DropDownBox;
