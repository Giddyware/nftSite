import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerUser } from "../../context/auth/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../Container/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { resetError } from "../../context/auth/authSlice";

const schema = z
  .object({
    username: z
      .string()
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscore.(please make sure it only containers these)"
      )
      .nonempty("UserName is required")
      .min(5, "Username must be at least 5 character long"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long."),
    passwordConfirm: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match. Please try again.",
    path: ["passwordConfirm"],
  });

const RegisterForm = () => {
  const { status, changeStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const validData = schema.parse(data);
      setLoading(true);

      await dispatch(registerUser(validData));
      setLoading(false);

      // reset();
      console.log(error, "error");

      !error && navigate("/verify_email");
    } catch (error) {
      console.error(error);
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
    <form
      className="w-[90%] flex flex-col gap-4 max-w-[40rem] rounded-3xl px-12 text-xl py-16 shadow-100  mt-36 bg-white border outline-slate-700 outline-4 font-poppins"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className="mx-auto">
        <img className="w-64" alt="Omega" src={logo} />
      </header>
      <fieldset className="grid grid-cols-6 gap-8">
        <p as="legend" className="text-5xl font-normal tracking-300">
          Register
        </p>

        <div className="flex flex-col col-span-6 gap-4 mt-6">
          <div className="flex items-center justify-between text-xl">
            <label htmlFor="username">Username</label>
          </div>
          <input
            className="w-full px-8 py-6 font-bold text-black border rounded-lg  border-[hsl(218,_92%,_95%)] bg-neutral-100 "
            type="username"
            id="username"
            {...registerForm("username")}
          />
          {errors.username && (
            <div className="font-semibold text-red-400 ">
              {errors.username.message}
            </div>
          )}
        </div>

        <div className="flex flex-col col-span-6 gap-4 mt-6 text-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="email">Email</label>
          </div>
          <input
            className="w-full px-8 py-6 font-bold text-black border rounded-lg  border-[hsl(218,_92%,_95%)] bg-neutral-100 "
            type="email"
            id="email"
            {...registerForm("email")}
          />
          {errors.email && (
            <span className="font-semibold text-red-400">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col col-span-6 gap-4 mt-10 text-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="password"> Password </label>
          </div>
          <input
            className="w-full px-8 py-6 font-bold text-black border rounded-lg  border-[hsl(218,_92%,_95%)] bg-neutral-100 "
            type="password"
            id="password"
            {...registerForm("password")}
          />
          {errors.password && (
            <span className="font-semibold text-red-400">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col col-span-6 gap-4 mt-6 text-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="passwordConfirm">Confirm Password </label>
          </div>
          <input
            className="w-full px-8 py-6 font-bold text-black border rounded-lg  border-[hsl(218,_92%,_95%)] bg-neutral-100 "
            type="password"
            id="passwordConfirm"
            {...registerForm("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span className="font-semibold text-red-400">
              {errors.passwordConfirm.message}
            </span>
          )}
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
          <span className="flex w-[280px] md:w-[330px] font-semibold text-red-400">
            {error.message.split(": ")[1]}
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
