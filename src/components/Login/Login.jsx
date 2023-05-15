// import { FormProvider } from "react-hook-form";
import React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../Container/Auth";
import { loginUser } from "../../context/auth/authActions";

const schema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  password: z.string().nonempty("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { status, changeStatus } = useContext(AuthContext);

  const dispatch = useDispatch();
  const {
    register: loginForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const error = useSelector((state) => state.auth.error);

  const onSubmit = (data) => {
    try {
      const validData = schema.parse(data);
      setLoading(true);
      console.log(validData, "validData");

      dispatch(loginUser(validData));

      setLoading(false);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <form
      className="w-[90%] md:w-full max-w-[40rem] rounded-3xl px-12 py-16 shadow-100 dark:bg-blue-600 max-md:mt-24 bg-white border-[1px] outline-slate-700 outline-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="grid grid-cols-6 gap-8">
        <p as="legend" className="text-5xl font-normal tracking-300">
          Login
        </p>

        <div className="flex flex-col-reverse col-span-6 gap-4 mt-10">
          <input
            className='body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
            type="email"
            id="email"
            {...loginForm("email")}
          />
          <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
            <label htmlFor="email">Email</label>
            {errors.email && (
              <span className="text-200 font-semibold leading-200 tracking-[-0.21px]">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse col-span-6 gap-4 mt-10">
          <input
            className='body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
            type="password"
            id="password"
            {...loginForm("password")}
          />
          <label htmlFor="password">Password</label>
          {errors.password && (
            <span className="text-200 font-semibold leading-200 tracking-[-0.21px]">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="button"
          className="flex items-center col-span-6 gap-6 group"
          onClick={() => {}}
        >
          <span className="inline-grid aspect-square w-[1.6rem] place-items-center rounded-[0.2rem] border  border-blue-400/25 bg-blue-100 group-hover:border-blue-500 group-aria-pressed:bg-blue-500 dark:bg-blue-700 dark:group-aria-pressed:bg-blue-500">
            <img
              // src={icons.actions.check}
              className="hidden group-aria-pressed:block"
            />
          </span>

          <span className="body-100">Recognize this device in the future</span>
        </button>
        <div className="col-span-6 mt-6 bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
          <button
            type="submit"
            disabled={loading}
            className="w-full p-6 font-normal transition duration-500 bg-red-500 border-none rounded-lg outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-200 hover:text-blue-500 hover:rounded-lg"
          >
            {loading ? <span>Logging you in</span> : " Login to your account"}
          </button>
        </div>

        {error && (
          <span className="width-max-context text-200 text-red-500 font-semibold leading-200 tracking-[-0.21px]">
            *{error.message}
          </span>
        )}

        <div className="flex items-center justify-center col-span-6 gap-4 text-500">
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
  );
};

export default Login;
