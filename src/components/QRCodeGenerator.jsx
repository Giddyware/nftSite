import { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ qrCode }) => {
  const [qrCodeImage, setQRCodeImage] = useState("");

  useEffect(() => {
    // Set the base64 image string as the QR code image
    setQRCodeImage(qrCode);
    // console.log(qrCode, "qrCode");
  }, [qrCode]);

  return <div>{qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}</div>;
};
export default QRCodeGenerator;
