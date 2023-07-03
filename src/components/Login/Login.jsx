// import { FormProvider } from "react-hook-form";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext } from "../../Container/Auth";
import {
  createEmailToken,
  getUserDetails,
  loginUser,
} from "../../context/auth/authActions";
import { getNfts } from "../../context/nft/nftActions";
import logo from "../../assets/logo.png";
import { resetError } from "../../context/auth/authSlice";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email address is required")
    .email("Please enter a valid email address"),
  password: z.string().nonempty("Password is required"),
  // .min(8, "Password must be at least 8 characters long."),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { status, changeStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useLocation().state;
  const { isAuthenticated, error, isLoading } = useSelector(
    (state) => state.auth
  );

  const {
    register: loginForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    try {
      const validData = schema.parse(data);
      setLoading(true);

      dispatch(loginUser(validData));
      setLoading(false);
      navigate("/dashboard");
      // dispatch(getUserDetails());

      // reset();
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      dispatch(resetError());
    }, 1200);

    return () => {
      clearTimeout(resetTimeout);
    };
  }, [dispatch]);

  return (
    // <div className="flex">
    <form
      className="w-[80%] flex flex-col overflow-y-auto md:w-full max-w-[40rem] gap-12 rounded-3xl px-12 py-16 bg-white border outline-slate-700 outline-4 font-poppins"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isAuthenticated && (
        <Navigate to={state !== null ? state.from : "/marketPlace"} />
      )}
      <header className="mx-auto">
        <img className="w-64" alt="Artmint" src={logo} />
      </header>
      <fieldset className="grid grid-cols-6 gap-8">
        <p as="legend" className="mx-auto text-5xl font-normal tracking-300">
          Login
        </p>

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
            {...loginForm("email")}
          />
          {errors.email && (
            <div className="text-red-400 col-span-6 font-semibold tracking-[-0.21px]">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="flex flex-col col-span-6 gap-4 mt-10">
          <label htmlFor="password" className="text-2xl">
            Password
          </label>
          <input
            className="w-full px-8 py-6 text-2xl font-bold text-black border rounded-lg body-100 peer bg-neutral-100"
            type="password"
            id="password"
            {...loginForm("password")}
          />
          {errors.password && (
            <span className="col-span-6 font-semibold text-red-400">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="col-span-6 mt-6 text-xl bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
          <button
            type="submit"
            disabled={loading || isLoading}
            className="w-full p-6 font-normal transition duration-500 bg-red-400 border-none rounded-lg outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-200 hover:text-blue-500"
          >
            {loading || isLoading ? (
              <span>Logging you in...</span>
            ) : (
              <span>Login to your account</span>
            )}
          </button>
        </div>
        <p className="col-span-5 col-start-2 text-xl cursor-pointer">
          Forgot password?{" "}
          <Link to="/forgotPassword" className="underline hover:no-underline">
            Click here to reset
          </Link>
        </p>

        {error && (
          <span className="text-200 text-red-400 col-span-6 font-semibold leading-200 tracking-[-0.21px]">
            {error.message.split(": ")[1]}
          </span>
        )}

        <div className="flex items-center justify-center col-span-6 gap-4 text-xl">
          <p>Don’t have an account?</p>
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => changeStatus()}
          >
            Sign Up
          </div>
        </div>
      </fieldset>
    </form>
    // </div>
  );
};

export default Login;
