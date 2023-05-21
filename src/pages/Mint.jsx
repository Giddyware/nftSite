import { useState } from "react";
import { useForm } from "react-hook-form";

const Mint = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register: mintForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    try {
      const validData = schema.parse(data);
      setLoading(true);
      console.log(validData, "validData");

      dispatch(loginUser(validData));

      dispatch(getUserDetails());

      reset();

      navigate(state.from ? state.from : "/");
    } catch (error) {
      toast.error("Login failed. Please try again.");
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
        <p className="my-5 text-lg">* Required Field</p>

        <p className="text-2xl font-bold">Image *</p>
        <p className="my-5 text-lg">File types supported: JPG, PNG, JPEG</p>
        <div>
          <label for="images" className=" drop-container">
            <span class="drop-title">Drop files here</span>
            or
            <input
              type="file"
              id="images"
              accept="image/*"
              required
              {...mintForm("image")}
              onChange={handleImageChange}
            />
            {previewImage && (
              <img className="w-14 h-14" src={previewImage} alt="Preview" />
            )}
          </label>
        </div>

        <div>
          <label className="my-5 text-2xl font-bold">Name *</label>
          <input
            type="text"
            placeholder="NFT name"
            className="w-full p-4 border rounded"
          />
        </div>

        <div>
          <label
            for="Categories"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Categories
          </label>
          <select
            id="Categories"
            className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label id="price" className="my-5 text-2xl font-bold">
            Price *
          </label>
          <input
            type="number"
            placeholder="NFT Price"
            className="w-1/2 p-4 border rounded"
          />
        </div>

        <p className="my-5 text-2xl font-bold">External Link</p>
        <p className="">
          OpenSea will include the link Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus non ipsa possimus eos, nihil, fuga
          corporis assumenda
        </p>

        <p className="my-5 text-2xl font-bold">Description</p>
        <p className="">
          OpenSea will include the link Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <textarea
          className="w-full p-5 my-5 border-2 rounded-md"
          name="nftDescription"
          id="nftDescription"
          cols="30"
          rows="10"
          placeholder="Provide a detailed description of your NFT."
        ></textarea>

        <button className="bg-[#084cdf] py-6 px-10 ml-auto text-white rounded-lg mt-3 hover:bg-blue-800 shadow-xl">
          Mint
        </button>
      </div>
    </form>
    // </div>
  );
};
export default Mint;
