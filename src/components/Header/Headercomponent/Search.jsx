import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center gap-4 glass__effect bg-inherit flex-1">
      <HiSearch size={"20px"} color="white" />
      <input
        type="text"
        placeholder="Search items, collections and accounts"
        className="text-3xl text-white bg-transparent w-full"
      />
    </div>
  );
};
export default Search;
