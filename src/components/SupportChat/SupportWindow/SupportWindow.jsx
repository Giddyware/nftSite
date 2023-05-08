import { useState } from "react";
import { styles } from "../styles";
import EmailForm from "./EmailForm";

const SupportWindow = (props) => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <EmailForm visible={visible} />
    </div>
  );
};
export default SupportWindow;
