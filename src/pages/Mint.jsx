import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number, any } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { createNft } from "../context/nft/nftActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Overlay from "../components/UI/Overlay";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const schema = object({
  name: string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).nonempty("Name is required"),

  category: string({
    required_error: "Category is required",
    invalid_type_error: "Category must be a string",
  }).nonempty("Category is required"),

  priceInEtherium: number({
    required_error: "Price is required",
    invalid_type_error: "Price is required and  must be a number",
  }).positive("Price must be greater than 0"),
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

const Mint = ({ show, modalStatus }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.product.error);

  const {
    register: mintForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    try {
      setLoading(true);
      // data.priceInEtherium = parseFloat(data.priceInEtherium); // Convert the price to a number

      // const validData = schema.parse(data); //Validating the data

      // console.log(validData, "validData");

      const formData = new FormData();
      formData.append("photo", data.photo[0]); // Append the image file to the FormData object

      // Append the rest of the form data to the FormData object
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "photo") {
          formData.append(key, value);
        }
      });

      // console.log(formData, "formData");

      dispatch(createNft(formData));
      toast.success("Minting Successful .🎉");
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
    <>
      <Overlay show={show} clear={modalStatus} />

      <form
        className="fixed h-[90%] top-0 right-0 left-0 bottom-0 mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start justify-center min-h-[100%] bg-white  px-10 py-12 border-2 rounded-2xl max-w-[450px] my-6 mx-auto text-[#04111D]">
          <p className="text-5xl font-bold">Create New Item</p>

          {/* <p className="text-2xl font-bold">Image *</p> */}
          <p className="my-5 text-lg">File types supported: JPG, PNG, JPEG</p>
          <div className="max-w-[290px] md:max-w-[350px] lg:max-w-[350px]">
            <label htmlFor="photo" className="drop-container">
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
              {errors.photo && (
                <span className="text-red-500  col-span-6 font-semibold tracking-[-0.21px]">
                  {errors.photo.message}
                </span>
              )}
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
            {errors.name && (
              <div className="text-red-500 text-xl mt-2  col-span-6 font-semibold tracking-[-0.21px]">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="flex justify-between min-w-[400px] md:min-w-[420px] lg:min-w-[470px] mt-auto overflow-x-hidden">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="category"
                className="text-2xl font-bold text-gray-900"
              >
                Categories *
              </label>
              <select
                id="category"
                name="category"
                className={`w-full min-w-[80px] px-4 py-4 text-2xl text-gray-900 border border-gray-300 rounded-lg ${
                  errors.category ? "border-red-500" : ""
                }`}
                {...mintForm("category")}
              >
                <option value="">Choose category</option>
                <option value="arts">Arts</option>
                <option value="gaming">Gaming</option>
                <option value="membership">Membership</option>
                <option value="photography">Photography</option>
                <option value="pfps">PFPS</option>
                <option value="others">Others</option>
              </select>
              {errors.category && (
                <div className="text-red-500 text-xl mt-2  font-semibold tracking-[-0.21px]">
                  {errors.category.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 ml-auto w-fit">
              <label htmlFor="priceInEtherium" className="text-2xl font-bold">
                Price in ETH *
              </label>
              <input
                type="number"
                step="any"
                placeholder="NFT Price"
                id="priceInEtherium"
                name="priceInEtherium"
                className={`w-2/3 p-4 border rounded ${
                  errors.priceInEtherium ? "border-red-500" : ""
                }`}
                {...mintForm("priceInEtherium", {
                  valueAsNumber: true,
                })}
              />
              {errors.priceInEtherium && (
                <div className="text-red-500 text-xl mt-2 max-w-[180px] font-semibold tracking-[-0.21px]">
                  {errors.priceInEtherium.message}
                </div>
              )}
            </div>
          </div>

          <p className="mt-12 text-2xl font-bold">Description</p>

          <textarea
            className={`w-full p-5 my-5 border rounded-md ${
              errors.description ? "border-red-500" : ""
            }`}
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Provide a detailed description of your NFT."
            {...mintForm("description")}
          ></textarea>
          {errors.description && (
            <div className="text-red-500 text-xl font-semibold tracking-[-0.21px]">
              {errors.description.message}
            </div>
          )}
          <div className="flex justify-between w-full mt-auto">
            <button className="bg-[#2196F3] py-5 px-3 w-48  text-white rounded-lg mt-3 hover:bg-[hsl(207,_90%,_74%)] shadow-xl">
              Mint
            </button>
            <button
              onClick={() => modalStatus()}
              className="w-48 px-3 py-5 mt-3 text-white bg-gray-400 rounded-lg shadow-xl hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Mint;
