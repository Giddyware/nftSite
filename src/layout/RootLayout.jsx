import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header addBg={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default RootLayout;
