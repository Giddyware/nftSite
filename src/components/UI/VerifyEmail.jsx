import {
  BsDiscord,
  BsEnvelopeExclamation,
  BsFacebook,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../../assets/logo.png";
import envelope from "../../assets/envelope.png";
import { BiEnvelope } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createEmailToken } from "../../context/auth/authActions";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createEmailToken());
  };
  return (
    <div className="h-[92vh] border-solid border mt-[5vh]  shadow-lg font-poppins text-[1rem] flex flex-col px-8 py-8  rounded-[10px] min-w-fit bg-gray-100 mx-10 md:mx-96">
      <header className="mx-auto">
        <img className="w-72" src={logo} />
      </header>
      <main className="flex flex-col items-center text-3xl gap-7">
        {/* <BsEnvelopeExclamation size={94}/> */}
        <div className="my-16 md:my-32">
          <img className="w-72" src={envelope} />
        </div>

        <h1 className="text-4xl font-bold">
          Your email has not been verified.
        </h1>
        <p>Send a verification email to </p>
        <div className="col-span-6 px-24 mx-auto mt-6 bg-blue-500 rounded-lg hover:bg-neutral-100 hover:text-blue-500">
          <button
            type="submit"
            // disabled={loading}
            className="w-full p-6 font-normal transition duration-100 ease-in-out bg-red-500 border-none outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-blue-700 hover:text-white hover:rounded-lg"
            onClick={() => handleClick()}
          >
            Send verification Email
          </button>
        </div>
      </main>

      <footer className="flex mx-auto mt-20 text-blue-500">
        <BsDiscord size={30} />
        <BsTwitter size={30} />
        <BsFacebook size={30} />
        <BsTelegram size={30} />
      </footer>
    </div>
  );
};
export default VerifyEmail;
