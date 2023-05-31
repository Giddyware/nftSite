import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center gap-1 min-h-48 md:gap-4 glass__effect bg-inherit flex-1 ">
      <div className="w-10 md:w-[20px]">
        <HiSearch size={"2rem"} color="white" />
      </div>
      <input
        type="text"
        placeholder="Search items, collections and accounts"
        className="text-md md:text-3xl text-white bg-transparent w-full"
      />
      {/* <label
        for="small"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Small select
      </label> */}
      {/* <select
        id="nfts"
        className="  w-32 md:w-48  border h-full border-gray-300 rounded-md bg-inherit focus:ring-blue-500 focus:border-blue-500"
      >
        <option selected>filter</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
      </select> */}
    </div>
  );
};
export default Search;
