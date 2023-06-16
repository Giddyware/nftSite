import Overlay from "./UI/Overlay";
import { FiCheckCircle } from "react-icons/fi";

const WithdrawalSubmitted = ({ show, modalStatus }) => {
  return (
    <>
      <Overlay
        show={show}
        //    clear={modalStatus}
      />
      <div
        className="fixed top-0 right-0 left-0 bottom-0 mx-auto  overflow-y-auto max-h-fit sm:w-[40%] text-3xl font-poppins font-[500] z-[100000] text-black bg-white rounded-2xl px-10 py-12"
        style={{
          transform: show ? "translateY(0)" : "translateY(-1500px)",
          opacity: show ? "1" : "0",
          transition: "all 1s",
        }}
      >
        <div className="flex flex-col w-full items-center gap-9 py-12 px-4">
          <FiCheckCircle className="w-32 h-32 text-[#2196F3]" />
          <h3 className="font-extrabold text-4xl">Withdrawal Submitted</h3>
          <p className="text-center">
            Your withdrawal has been submitted, you may visit History to check
            the order status
          </p>
          <button
            onClick={() => modalStatus()}
            className="w-full mt-10 capitalize bg-[#2196F3] hover:bg-[#478ec8] text-white p-4 md:p-6"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  );
};
export default WithdrawalSubmitted;
