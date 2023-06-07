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
    <div className="max-h-[50%] max-w-[800px] border-solid border mt-[5%]  shadow-lg font-poppins text-[1rem] flex flex-col px-8 py-8  rounded-[10px] min-w-fit bg-gray-100 mx-10 md:mx-96">
      <header className="mx-auto">
        <img className="w-72" alt="Artmint" src={logo} />
      </header>
      <main className="flex flex-col items-center text-3xl gap-7">
        {/* <BsEnvelopeExclamation size={94}/> */}
        <div className="my-10 md:my-12">
          <img className="w-72" src={envelope} />
        </div>

        <h1 className="text-4xl font-bold">
          Your email has not been verified.
        </h1>
        <p>Click the button below to verified </p>
        <div className="px-24 mx-auto rounded-lg hover:bg-neutral-100 hover:text-blue-500">
          <button
            // type="submit"
            // disabled={loading}
            className="w-full p-6 font-normal bg-blue-500 border-none rounded-lg outline-none opacity-100 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-blue-700 hover:text-white"
            onClick={() => handleClick()}
          >
            Send verification Email
          </button>
        </div>
        <p
          onClick={() => handleClick()}
          className="text-[16px] mt-10 hover:underline cursor-pointer"
        >
          Link not received? click here to Resend link
        </p>
      </main>
    </div>
  );
};
export default VerifyEmail;
