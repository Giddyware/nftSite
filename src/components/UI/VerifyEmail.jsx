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
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createEmailToken());
  };
  return (
    <div className="max-h-[50%] max-w-[800px] border-solid border mt-[5%] mx-auto shadow-lg font-poppins text-[1rem] flex flex-col px-8 py-8  rounded-[10px] bg-gray-100">
      <header className="mx-auto">
        <img className="w-72" alt="Omega" src={logo} />
      </header>
      <main className="flex flex-col items-center text-3xl gap-7">
        {/* <BsEnvelopeExclamation size={94}/> */}
        <div className="my-10 md:my-12">
          <img className="w-72" src={envelope} />
        </div>

        <h1 className="text-4xl font-bold text-center ">Verify Your Account</h1>
        <p className="max-w-[490px] text-center">
          Verification link has been sent to your email address. Follow the link
          to verify your account
        </p>
        <div className="px-24 mx-auto rounded-lg hover:bg-neutral-100 hover:text-blue-500">
          {/* <button
            // type="submit"
            // disabled={loading}
            className="w-full p-6 font-normal bg-blue-500 border-none rounded-lg outline-none opacity-100 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-blue-700 hover:text-white"
            onClick={() => handleClick()}
          >
            Send verification Email
          </button> */}
        </div>
        <a
          onClick={() => handleClick()}
          className="text-[16px] my-8 cursor-pointer w-full text-center"
        >
          Link not received?
          <span className=" hover:underline text-[hsl(207,_90%,_54%)]">
            {" "}
            Resend link
          </span>
        </a>
      </main>
    </div>
  );
};
export default VerifyEmail;
