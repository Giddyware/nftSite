// import { FormProvider } from "react-hook-form";
import FormField from "../FormField";
// import Text from "../Text";
import { AuthContext } from "../../Container/Auth";
// // import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
// const { status, changeStatus } = useContext(AuthContext);

//   let methods;

//   return (
//     <FormProvider {...methods}>
//       <form
//         className="w-[90%] md:w-full max-w-[40rem] rounded-3xl px-12 py-16 shadow-100 dark:bg-blue-600 max-md:mt-24 bg-white border-[1px] outline-slate-700 outline-4"
//         // onSubmit={methods.handleSubmit(onSubmit)}
//       >
//         <fieldset className="grid grid-cols-6 gap-8">
//           <Text as="legend" className="text-5xl font-normal tracking-300">
//             Login
//           </Text>

//           <FormField
//             type="email"
//             name="email"
//             label={"Email Address"}
//             className="col-span-6 mt-10"
//             autoComplete="username"
//           />

//           <FormField
//             type="password"
//             name="password"
//             label={"Password"}
//             className="col-span-6"
//             autoComplete="new-password"
//           />

//           <button
//             type="button"
//             className="flex items-center col-span-6 gap-6 group"
//             // aria-pressed={persist}
//             // onClick={setPersist}
//           >
//             <span className="inline-grid aspect-square w-[1.6rem] place-items-center rounded-[0.2rem] border  border-blue-400/25 bg-blue-100 group-hover:border-blue-500 group-aria-pressed:bg-blue-500 dark:bg-blue-700 dark:group-aria-pressed:bg-blue-500">
//               <img
//                 // src={icons.actions.check}
//                 className="hidden group-aria-pressed:block"
//               />
//             </span>

//             <span className="body-100">
//               Recognize this device in the future
//             </span>
//           </button>

//           <div className="col-span-6 mt-6 bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
//             <button
//               type="submit"
//               // disabled={!isSubmittable}
//               className="w-full p-6 font-normal transition duration-500 bg-red-500 border-none outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-100 hover:text-blue-500"
//             >
//               Login to your account
//             </button>
//           </div>

//           <div className="flex items-center justify-center col-span-6 gap-4 text-500">
//             <Text>Don’t have an account?</Text>
//             <div className="text-blue-500 " onClick={() => changeStatus()}>
//               Sign Up
//             </div>
//           </div>
//         </fieldset>
//       </form>
//     </FormProvider>
//   );
// };
// export default Login;

// LoginForm.js
// import React from 'react';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../context/auth/authActions";
import { z } from "zod";

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

      console.log(validData, "val");
      dispatch(login(validData));
      setLoading(false);
      // Reset form values here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...loginForm("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...loginForm("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      {error && <span>{error.message}</span>}

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </button>
      <div className="flex items-center justify-center col-span-6 gap-4 text-500">
        <p>Don’t have an account?</p>
        <div className="text-blue-500 " onClick={() => changeStatus()}>
          Sign Up
        </div>
      </div>
    </form>
  );
};

export default Login;
