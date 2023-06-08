import { MdContentPaste } from "react-icons/md";
import React, { useRef } from "react";

const PasteOnClick = ({ onPaste }) => {
  const handleClick = () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then((text) => {
        onPaste(text);
      });
    }
  };

  return (
    <span onClick={handleClick}>
      <MdContentPaste />
    </span>
  );
};

export default PasteOnClick;
