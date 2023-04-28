import Dropitems from "./Dropitems";

const DropDownBox = ({ values }) => {
  return (
    <ul className="bottom-0 z-50 w-80 bg-white rounded-lg py-[10px]" >
      {values.map((val) => (
        <Dropitems item={val} />
      ))}
    </ul>
  );
};
export default DropDownBox;
