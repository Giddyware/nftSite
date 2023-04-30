import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center gap-1 md:gap-4 glass__effect bg-inherit flex-1 ">
      <div className="w-10 md:w-[20px]">
      <HiSearch size={"100%"} color="white" />
      </div>
      <input
        type="text"
        placeholder="Search items, collections and accounts"
        className="text-md md:text-3xl text-white bg-transparent w-full"
      />
    </div>
  );
};
export default Search;
