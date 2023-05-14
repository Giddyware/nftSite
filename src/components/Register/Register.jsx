// import { FormProvider } from "react-hook-form";
// // import { Link, useNavigate } from "react-router-dom";
// import Text from "../Text";
import FormField from "../FormField";
// import { Link } from "react-router-dom/dist";
// import { useContext } from "react";
// import { AuthContext } from "../../Container/Auth";

// const RegisterForm = () => {
//   const { status, changeStatus } = useContext(AuthContext);

//   let methods;
//   return (
//     <FormProvider {...methods}>
//       <form
//         className="w-[90%] md:w-full max-w-[40rem]  rounded-3xl  px-12 py-16 shadow-100 dark:bg-blue-600 max-md:mt-24 border-[1px] outline-slate-700 outline-4"
//         // onSubmit={methods.handleSubmit(onSubmit)}
//       >
//         <fieldset className="grid grid-cols-6 gap-8">
//           <Text as="legend" className="text-5xl font-normal tracking-300">
//             Register
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

//           <FormField
//             type="password"
//             name="countersign"
//             label={"Confirm Password"}
//             className="col-span-6"
//             autoComplete="new-password"
//           />

//           <div className="col-span-6 mt-6 bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
//             <button
//               type="submit"
//               //   disabled={!isSubmittable}
//               className="w-full p-6 font-normal transition duration-500 bg-red-500 border-none outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-100 hover:text-blue-500"
//             >
//               Create an account
//             </button>
//           </div>

//           <div className="flex items-center justify-center col-span-6 gap-4 text-500">
//             <Text>Already have an account?</Text>
//             <div className="text-blue-500" onClick={() => changeStatus()}>
//               Login
//             </div>
//           </div>
//         </fieldset>
//       </form>
//     </FormProvider>
//   );
// };
// export default RegisterForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { register as registerUser } from "../../context/auth/authActions";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().nonempty("UserName is required"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  password: z.string().nonempty("Password is required"),
  passwordConfirm: z.string().nonempty("Confirm Password is required"),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      const validData = schema.parse(data);
      setLoading(true);

      console.log(validData, "val");
      dispatch(registerUser(validData));
      setLoading(false);
      // Reset form values here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...registerForm("username")} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...registerForm("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...registerForm("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            {...registerForm("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm.message}</span>
          )}
        </div>

        {/* {error && <span>{error}</span>} */}
        {error && (
          <span>
            {error.status}: {error.message}
          </span>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
