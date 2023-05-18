import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerUser } from "../../context/auth/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../Container/Auth";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().nonempty("UserName is required"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  password: z.string().nonempty("Password is required"),
  passwordConfirm: z.string().nonempty("Confirm Password is required"),
});

const RegisterForm = () => {
  const { status, changeStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const validData = schema.parse(data);
      setLoading(true);

      console.log(validData, "val");
      await dispatch(registerUser(validData));
      setLoading(false);

      // Reset form values here if needed

      // Route to the dashboard page
      const navigate = useNavigate();
      navigate("/dashboard");
    } catch (error) {
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
          Register
        </p>

        <div className="flex flex-col-reverse col-span-6 gap-4 mt-10">
          <input
            className='body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
            type="username"
            id="username"
            {...registerForm("username")}
          />
          <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
            <label htmlFor="username">Username</label>
            {errors.username && (
              <span className="text-200 font-semibold leading-200 tracking-[-0.21px]">
                {errors.username.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse col-span-6 gap-4 mt-10">
          <input
            className='body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
            type="email"
            id="email"
            {...registerForm("email")}
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
            {...registerForm("password")}
          />
          <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
            <label htmlFor="password"> Password </label>
            {errors.password && (
              <span className="text-200 font-semibold leading-200 tracking-[-0.21px]">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse col-span-6 gap-4 mt-10">
          <input
            className='body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
            type="password"
            id="passwordConfirm"
            {...registerForm("passwordConfirm")}
          />
          <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
            <label htmlFor="passwordConfirm">Confirm Password </label>
            {errors.passwordConfirm && (
              <span className="text-200 font-semibold leading-200 tracking-[-0.21px]">
                {errors.passwordConfirm.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-span-6 mt-6 bg-blue-500 rounded-lg hover:bg-neutral-100 hover:text-blue-500">
          <button
            type="submit"
            disabled={loading}
            className="w-full p-6 font-normal transition duration-500 bg-red-500 border-none outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-200 hover:text-blue-500 hover:rounded-lg"
          >
            {loading ? <span>Signing up...</span> : <span>Sign Up.</span>}
          </button>
        </div>

        {error && (
          <span className="width-max-context text-200 text-red-500 font-semibold leading-200 tracking-[-0.21px]">
            {error.status}: *{error.message}
          </span>
        )}

        <div className="flex items-center justify-center col-span-6 gap-4 text-500">
          <p>Already have an account?</p>
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => changeStatus()}
          >
            Log in
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
