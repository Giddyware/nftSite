import Header from "../components/Header/Header";
import logo from "../assets/logo.png";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../context/auth/authActions";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email address is required")
    .email("Please enter a valid email address"),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register: forgotPasswordForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    try {
      const validData = schema.parse(data);
      setLoading(true);
    

      dispatch(forgotPassword(validData));
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-[100%] py-5">
      <form
        className="w-[80%] flex flex-col overflow-y-auto md:w-full max-w-[40rem] gap-12 rounded-3xl px-12 py-16 bg-white border outline-slate-700 outline-4 font-poppins"
        onSubmit={handleSubmit(onSubmit)}
      >
        <header className="mx-auto">
          <img className="w-64" alt="Artmint" src={logo} />
        </header>
        <div className="grid grid-cols-6 gap-8">
          <p className="col-span-6 text-5xl font-normal tracking-300">
            Forgot password?
          </p>
          <p className="col-span-6 text-xl font-medium text-gray-500">
            No worries, we'll send you reset instructions.
          </p>
        </div>
        <div className="flex flex-col col-span-6 gap-4 mt-10">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="text-2xl">
              Email
            </label>
          </div>
          <input
            className="w-full px-8 py-6 text-2xl font-bold text-black border rounded-lg body-100 peer bg-neutral-100"
            type="email"
            id="email"
            {...forgotPasswordForm("email")}
          />
          {errors.email && (
            <div className="text-red-400 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="col-span-6 mt-6 text-xl bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
          <button
            type="submit"
            disabled={loading}
            className="w-full p-6 font-normal transition duration-500 bg-red-400 border-none rounded-lg outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-200 hover:text-blue-500"
          >
            {loading ? (
              <span>Resetting password..</span>
            ) : (
              <span>Reset password</span>
            )}
          </button>
        </div>
        <Link
          to="/auth"
          className="flex items-center justify-center col-span-6 gap-2 text-xl cursor-pointer group"
        >
          <BsArrowLeft
            size={20}
            className="group-hover:-translate-x-0.5 group-hover:text-gray-500"
          />{" "}
          <span className="group-hover:underline ">Back to log in</span>
        </Link>
      </form>
    </div>
  );
};
export default ForgotPassword;
