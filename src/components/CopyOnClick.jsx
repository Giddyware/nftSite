import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const CopyOnClick = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="inline-flex ml-8 text-black">
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : <MdContentCopy size={22} />}
      </button>
    </div>
  );
};

export default CopyOnClick;
