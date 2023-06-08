import blankPIc from "../assets/blank_profile_pic.webp";
import Overlay from "./UI/Overlay";

const Profile = ({ show, modalStatus }) => {
  return (
    <>
      <Overlay show={show} clear={modalStatus} />
      <div
        className="fixed top-0 right-0 left-0 bottom-0  mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
        <div className="flex justify-between w-full mb-4">
          <button className="relative font-bold" onClick={() => modalStatus()}>
            X
          </button>
        </div>
        <form>
          <div className="flex items-center justify-center w-full mb-10">
            <label htmlFor="profileImg" className="w-48 h-48">
              <img src={blankPIc} alt="" className="rounded-full " />
            </label>
          </div>
          <input type="file" name="profileImg" className="mx-auto" />
          <button className="w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6">
            Update Profile picture
          </button>
          <div className="flex flex-col gap-5 mt-5">
            <h3>Change Password</h3>
            <input
              type="password"
              // ref={inputRef}
              id="oldPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Enter old password"
              // value={inputValue}
              // {...register("address")}
            />
            <input
              type="password"
              // ref={inputRef}
              id="newPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Enter new password"
              // value={inputValue}
              // {...register("address")}
            />
            <input
              type="password"
              // ref={inputRef}
              id="confirmPassword"
              className="block w-full p-6 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Confirm Password"
              // value={inputValue}
              // {...register("address")}
            />
            <button className="w-full mt-10 capitalize bg-[#2196F3] rounded hover:bg-[hsl(207,_90%,_70%)] text-white p-4 md:p-6">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Profile;