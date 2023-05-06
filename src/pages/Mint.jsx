const Mint = () => {
  return (
    // <div className="max-w-[400px] border-2  px-5 py-4 rounded-2xl">
    <div className="flex flex-col items-start justify-center min-h-[100%] bg-white  px-10 py-12 border-2 rounded-2xl max-w-[450px] my-6 mx-auto text-[#04111D]">
      <p className="text-5xl font-bold">Create New Item</p>
      <p className="my-5 text-lg">* Required Field</p>

      <p className="text-2xl font-bold">Image *</p>
      <p className="my-5 text-lg">File types supported: JPG, PNG</p>

      <label for="images" className=" drop-container">
        <span class="drop-title">Drop files here</span>
        or
        <input type="file" id="images" accept="image/*" required />
      </label>

      <p className="my-5 text-2xl font-bold">Name *</p>
      <input
        type="text"
        placeholder="NFT name"
        className="w-full p-4 border rounded"
      />

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
    // </div>
  );
};
export default Mint;
