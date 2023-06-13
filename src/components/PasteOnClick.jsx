import { MdContentPaste } from "react-icons/md";
import React, { useRef } from "react";

const PasteOnClick = ({ onPaste }) => {
  const handleClick = async () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      try {
        const text = await navigator.clipboard.readText();
        onPaste(text);
      } catch (error) {
        console.error("Failed to read clipboard text:", error);
      }
    }
  };

  return (
    <span onClick={handleClick}>
      <MdContentPaste />
    </span>
  );
};

export default PasteOnClick;
