import { useState } from "react";
import blankPIc from "../assets/blank_profile_pic.webp";
import Overlay from "./UI/Overlay";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, updateProfilePic } from "../context/auth/authActions";
import { toast } from "react-toastify";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z
  .object({
    currentPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .optional(),
    passwordConfirm: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => !data.password || data.password === data.passwordConfirm, {
    message: "Passwords do not match. Please try again.",
    path: ["passwordConfirm"],
  });

const ChangePass = ({ show, modalStatus }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const { isLoading, error } = useSelector((state) => state.auth);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();

  const {
    register: changePassForm,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    try {
      if (data.currentPassword && data.password && data.passwordConfirm) {
        // const passwordData = passwordSchema.parse(data);
        // console.log(data, "hello");
        dispatch(updatePassword(data));

        reset();
        modalStatus();
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const changePassword = () => {
    const currentPassword = getValues("currentPassword");
    const newPassword = getValues("password");
    const passwordConfirm = getValues("passwordConfirm");
    const data = { currentPassword, newPassword, passwordConfirm };
    dispatch(updatePassword(data));
  };

  return (
    <>
      <Overlay show={show} clear={modalStatus} />
      <form
        className="fixed top-0 right-0 left-0 bottom-0  mx-auto lg:h-fit  max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12 overflow-y-auto"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between w-full mb-4">
          <button className="relative font-bold" onClick={() => modalStatus()}>
            X
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-16">
          <h3 className="w-full mb-4 text-4xl font-bold text-center text-gray-800">
            Change Password
          </h3>
          <div className="mb-4">
            <label className="mb-2" htmlFor="oldPassword">
              Current Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Enter current password"
              {...changePassForm("currentPassword")}
            />
            {errors.currentPassword && (
              <div className="font-semibold text-red-400">
                {errors.currentPassword.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Enter new password"
              {...changePassForm("password")}
            />
            {errors.password && (
              <div className="font-semibold text-red-400">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Confirm Password"
              {...changePassForm("passwordConfirm")}
            />
            {errors.passwordConfirm && (
              <div className="font-semibold text-red-400">
                {errors.passwordConfirm.message}
              </div>
            )}
          </div>
          <button
            // onClick={handleSubmit(() => changePassword())}
            className={`w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6 ${
              isLoading ? "" : ""
            }`}
          >
            {isLoading ? "Processing" : " Change Password"}
          </button>
        </div>
      </form>
    </>
  );
};
export default ChangePass;
