import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number, any } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { createNft } from "../context/nft/nftActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const schema = object({
  name: string().nonempty("Name is required"),
  category: string().nonempty("Category is required"),
  priceInEtherium: number().min(0.0001, "Price must be a positive number"),
  description: string().nonempty("Description can not be left empty"),
  // image: string().nonempty("Image is required"), // Update the schema to include the image field
  photo: any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 50MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  // image: object().required(),
});

const Mint = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.product.error);

  const {
    register: mintForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      setLoading(true);
      data.priceInEtherium = parseFloat(data.priceInEtherium); // Convert the price to a number

      const validData = schema.parse(data); //Validating the data

      console.log(validData, "validData");

      const formData = new FormData();
      formData.append("photo", data.photo[0]); // Append the image file to the FormData object

      // Append the rest of the form data to the FormData object
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "photo") {
          formData.append(key, value);
        }
      });

      console.log(formData, "formData");

      dispatch(createNft(formData));

      reset();
    } catch (error) {
      toast.error("Minting failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
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
    } else {
      setPreviewImage(null);
    }
  };
  return (
    // <div className="max-w-[400px] border-2  px-5 py-4 rounded-2xl">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-start justify-center min-h-[100%] bg-white  px-10 py-12 border-2 rounded-2xl max-w-[450px] my-6 mx-auto text-[#04111D]">
        <p className="text-5xl font-bold">Create New Item</p>

        <p className="text-2xl font-bold">Image *</p>
        <p className="my-5 text-lg">File types supported: JPG, PNG, JPEG</p>
        <div>
          <label htmlFor="photo" className=" drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input
              type="file"
              id="photo"
              accept="image/*"
              required
              onChange={handleImageChange}
              {...mintForm("photo")}
            />
            {previewImage && (
              <img className="w-20 h-20" src={previewImage} alt="Preview" />
            )}
            {errors.photo && <span>{errors.photo.message}</span>}
          </label>
        </div>

        <div className="my-10">
          <label className="text-2xl font-bold ">Name *</label>
          <input
            type="text"
            placeholder="NFT name"
            className={`w-full p-4 mt-4 border rounded ${
              errors.name ? "border-red-500" : ""
            } `}
            {...mintForm("name")}
          />
        </div>

        <div className="flex items-baseline justify-between w-full">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="category"
              className="block text-2xl font-bold text-gray-900 dark:text-white"
            >
              Categories *
            </label>
            <select
              id="category"
              name="category"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
              {...mintForm("category")}
            >
              <option value="">Choose a category</option>
              <option value="arts">Arts</option>
              <option value="gaming">Gaming</option>
              <option value="membership">Membership</option>
              <option value="photography">Photography</option>
              <option value="pfps">PFPS</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 ">
            <label htmlFor="priceInEtherium" className="text-2xl font-bold">
              Price *
            </label>
            <input
              type="number"
              step={0.001}
              placeholder="NFT Price"
              id="priceInEtherium"
              name="priceInEtherium"
              className="w-2/3 p-4 border rounded focus:border-blue-600"
              {...mintForm("priceInEtherium")}
            />
            {errors.price && (
              <span className="text-red-400 font-semibold leading-200 tracking-[-0.21px]">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>

        <p className="my-5 text-2xl font-bold">Description</p>

        <textarea
          className="w-full p-5 my-5 border-2 rounded-md"
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Provide a detailed description of your NFT."
          {...mintForm("description")}
        ></textarea>
        <div className="flex justify-between w-full mt-auto">
          <button className="bg-[#084cdf] py-6 px-3 w-48  text-white rounded-lg mt-3 hover:bg-blue-800 shadow-xl">
            Mint
          </button>
          <button className="w-48 px-3 py-6 mt-3 text-white bg-gray-400 rounded-lg shadow-xl hover:bg-gray-600">
            <Link to={"/dashboard"}>Go to Dashboard</Link>
          </button>
        </div>
      </div>
    </form>
    // </div>
  );
};
export default Mint;
