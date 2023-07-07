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
    // currentPassword: z
    //   .string()
    //   .min(8, "Password must be at least 8 characters long.")
    //   .optional(),
    // password: z
    //   .string()
    //   .min(8, "Password must be at least 8 characters long.")
    //   .optional(),
    // passwordConfirm: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => !data.password || data.password === data.passwordConfirm, {
    message: "Passwords do not match. Please try again.",
    path: ["passwordConfirm"],
  });

const passwordSchema = z.object({
  currentPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
  passwordConfirm: z.string().nonempty("Confirm Password is required"),
});

const Profile = ({ show, modalStatus }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const { isLoading, error } = useSelector((state) => state.auth);
  // const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();

  const {
    register: profileForm,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    try {
      if (data.photo) {
        // const photoData = photoSchema.parse(data);
        const formData = new FormData();
        formData.append("photo", data.photo[0]);
        // console.log(data.photo, "formData");
        dispatch(updateProfilePic(formData));
        reset({ photo: null }); // Reset only the photo field
        modalStatus();
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const updateProfilePicture = (e) => {
    e.preventDefault();
    if (imageFile) {
      console.log(imageFile, "image");
      const formData = new FormData();
      formData.append("photo", imageFile[0]);
      dispatch(updateProfilePic(formData));
      modalStatus();
    } else {
      toast.error("No image file selected");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the selected image file and set the preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      console.log(e.target.files, "file");
      setImageFile(e.target.files); // Set the selected image file in state
    } else {
      setPreviewImage(null);
      setImageFile(null); // Reset the image file in state
    }
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

        <div className="flex items-center justify-center w-full mb-10">
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
          // onClick={updateProfilePicture}
          className="w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6"
        >
          {isLoading ? "Updating..." : " Update Profile picture"}
        </button>
      </form>
    </>
  );
};
export default Profile;
