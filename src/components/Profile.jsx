import { useState } from "react";
import blankPIc from "../assets/blank_profile_pic.webp";
import Overlay from "./UI/Overlay";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { updatePassword, updateProfilePic } from "../context/auth/authActions";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
// const schema = z
//   .object({
//     photo: z
//       .any()
//       .refine(
//         (files) => files?.[0]?.size <= MAX_FILE_SIZE,
//         `Max image size is 50MB.`
//       )
//       .refine(
//         (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//         "Only .jpg, .jpeg, .png and .webp formats are supported."
//       ),
//     currentPassword: z
//       .string()
//       .nonempty("Password is required")
//       .min(8, "Password must be at least 8 characters long."),
//     password: z
//       .string()
//       .nonempty("New Password is required")
//       .min(8, "Password must be at least 8 characters long."),
//     passwordConfirm: z.string().nonempty("Confirm Password is required"),
//   })
//   .refine((data) => data.password === data.passwordConfirm, {
//     message: "Passwords do not match. Please try again.",
//     path: ["passwordConfirm"],
//   });
const schema = z
  .object({
    photo: z
      .any()
      .refine(
        (files) =>
          !files ||
          (files[0]?.size <= MAX_FILE_SIZE &&
            ACCEPTED_IMAGE_TYPES.includes(files[0]?.type)),
        {
          message:
            "Invalid image format or size. Only .jpg, .jpeg, .png and .webp formats are supported, and the max size is 50MB.",
          path: ["photo"],
        }
      ),
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

const Profile = ({ show, modalStatus }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();

  // const {
  //   register: profileForm,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  //   getValues,
  // } = useForm({ resolver: zodResolver(schema) });
  const {
    register: profileForm,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  // const onSubmit = (data) => {
  //   try {
  //     if (data.photo) {
  //       const formData = new FormData();
  //       formData.append("photo", data.photo[0]);
  //       console.log(formData);
  //       // dispatch(updateProfilePic(formData));
  //     } else {
  //       const currentPassword = getValues("currentPassword");
  //       const newPassword = getValues("password");
  //       const passwordConfirm = getValues("passwordConfirm");
  //       const dataPass = { currentPassword, password, passwordConfirm };
  //       console.log(dataPass);
  //       // dispatch(updatePassword(dataPass));
  //     }
  //     reset();
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  // const onSubmit = (data) => {
  //   console.log(data, "data");
  //   try {
  //     if (data.photo) {
  //       const formData = new FormData();
  //       formData.append("photo", data.photo[0]);
  //       console.log(formData, "form");
  //       // dispatch(updateProfilePic(formData));
  //     }
  //     if (data.currentPassword && data.password && data.passwordConfirm) {
  //       const currentPassword = data.currentPassword;
  //       const newPassword = data.password;
  //       const passwordConfirm = data.passwordConfirm;
  //       console.log({ currentPassword, newPassword, passwordConfirm }, "hello");
  //       // dispatch(
  //       //   updatePassword({ currentPassword, newPassword, passwordConfirm })
  //       // );
  //     }
  //     reset();
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  const photoSchema = z.object({
    photo: z
      .any()
      .refine(
        (files) =>
          !files ||
          (files[0]?.size <= MAX_FILE_SIZE &&
            ACCEPTED_IMAGE_TYPES.includes(files[0]?.type)),
        {
          message:
            "Invalid image format or size. Only .jpg, .jpeg, .png and .webp formats are supported, and the max size is 50MB.",
          path: ["photo"],
        }
      ),
  });

  const passwordSchema = z.object({
    currentPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long."),
    password: z.string().min(8, "Password must be at least 8 characters long."),
    passwordConfirm: z.string().nonempty("Confirm Password is required"),
  });

  const onSubmit = (data) => {
    try {
      if (data.photo) {
        const photoData = photoSchema.parse(data);
        const formData = new FormData();
        formData.append("photo", photoData.photo[0]);
        console.log(data, "formData");
        // dispatch(updateProfilePic(formData));
        reset({ photo: null }); // Reset only the photo field
      }

      if (data.currentPassword && data.password && data.passwordConfirm) {
        const passwordData = passwordSchema.parse(data);

        console.log(passwordData, "hello");
        dispatch(updatePassword(passwordData));
        // dispatch(updatePassword(currentPassword, newPassword));
        reset(); // Reset only the password fields
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const updateProfilePicture = () => {
    const photo = getValues("photo");
    console.log(photo, "phkls");
    const formData = new FormData();
    formData.append("photo", photo[0]);
    console.log(formData, "phkls");
    // dispatch(updateProfilePic(formData));
  };

  const changePassword = () => {
    const currentPassword = getValues("currentPassword");
    const newPassword = getValues("password");
    const passwordConfirm = getValues("passwordConfirm");
    const data = { currentPassword, newPassword, passwordConfirm };
    console.log(data);
    // dispatch(updatePassword(data));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Read the selected image file and set the preview image
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setPreviewImage(null);
  //   }
  // };
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Read the selected image file and set the preview image
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setPreviewImage(null);
  //   }
  //   setValue("photo", file); // Set the value of the photo field
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the selected image file and set the preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setValue("photo", file); // Set the value of the photo field
    } else {
      setPreviewImage(null);
      setValue("photo", null); // Reset the value of the photo field
    }
  };
  return (
    <>
      <Overlay show={show} clear={modalStatus} />
      <form
        className="fixed top-0 right-0 left-0 bottom-0  mx-auto lg:h-full  max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12 overflow-y-auto"
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

        <div className="flex items-center justify-center w-full mb-10">
          {/* <label htmlFor="photo" className="w-48 h-48">
            {!previewImage && (
              <img
                src={blankPIc}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            )}
            {previewImage && (
              <img
                src={previewImage}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            )}
          </label>
        </div>
        <input
          type="file"
          // name="profileImg"
          className="mx-auto"
          onChange={handleImageChange}
          {...profileForm("photo")}
        /> */}
          <label htmlFor="profileImg" className="w-48 h-48">
            {!previewImage && (
              <img
                src={blankPIc}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            )}
            {previewImage && (
              <img
                src={previewImage}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            )}
          </label>
        </div>
        <input
          type="file"
          name="profileImg"
          className="mx-auto"
          onChange={handleImageChange}
          {...profileForm("photo")}
        />
        <button
          // onClick={handleSubmit(() => updateProfilePicture())}
          className="w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6"
        >
          Update Profile picture
        </button>
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
              {...profileForm("currentPassword")}
            />
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
              {...profileForm("password")}
            />
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
              {...profileForm("passwordConfirm")}
            />
          </div>
          <button
            // onClick={handleSubmit(() => changePassword())}
            className="w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6"
          >
            Change Password
          </button>
        </div>
      </form>
    </>
  );
};
export default Profile;
