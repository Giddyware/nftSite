import { FormProvider } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
import Text from "../Text";
import FormField from "../FormField";
import { Link } from "react-router-dom/dist";
import { useContext } from "react";
import { AuthContext } from "../../Container/Auth";

const RegisterForm = () => {
  const { status, changeStatus } = useContext(AuthContext);

  let methods;
  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-[40rem] h-[60%] rounded-3xl  px-12 py-16 shadow-100 dark:bg-blue-600 max-md:mt-24 border-[1px] outline-slate-700 outline-4"
        // onSubmit={methods.handleSubmit(onSubmit)}
      >
        <fieldset className="grid grid-cols-6 gap-8">
          <Text as="legend" className="text-5xl font-normal tracking-300">
            Register
          </Text>

          <FormField
            type="email"
            name="email"
            label={"Email Address"}
            className="col-span-6 mt-10"
            autoComplete="username"
          />

          <FormField
            type="password"
            name="password"
            label={"Password"}
            className="col-span-6"
            autoComplete="new-password"
          />

          <FormField
            type="password"
            name="countersign"
            label={"Confirm Password"}
            className="col-span-6"
            autoComplete="new-password"
          />

          <div className="col-span-6 mt-6 bg-blue-500 hover:bg-neutral-100 hover:text-blue-500">
            <button
              type="submit"
              //   disabled={!isSubmittable}
              className="w-full p-6 font-normal transition duration-500 bg-red-500 border-none outline-none btn text-500 text-neutral-100 focus:bg-neutral-100 focus:text-blue-500 hover:bg-neutral-100 hover:text-blue-500"
            >
              Create an account
            </button>
          </div>

          <div className="flex items-center justify-center col-span-6 gap-4 text-500">
            <Text>Already have an account?</Text>
            <div className="text-blue-500" onClick={() => changeStatus()}>
              Login
            </div>
          </div>
        </fieldset>
      </form>
    </FormProvider>
  );
};
export default RegisterForm;
