import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import SupportWindow from "./SupportWindow/SupportWindow";

const SupportEngine = () => {
  const supportEngineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        supportEngineRef.current &&
        !supportEngineRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [supportEngineRef]);

  return (
    <div ref={supportEngineRef}>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={{ position: "fixed", bottom: "24px", right: "12px" }}
      />
    </div>
  );
};
export default SupportEngine;
