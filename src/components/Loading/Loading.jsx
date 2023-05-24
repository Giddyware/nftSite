import Logo from "../../assets/logo.png";
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-full min-w-full">
      <div className="w-56 h-28 loader">
        <img className="ml-12" src={Logo} alt="" />
      </div>
    </div>
  );
};
export default Loading;
