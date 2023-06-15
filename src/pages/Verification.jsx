import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import VerifyEmail from "../components/UI/VerifyEmail";

const Verification = () => {
  return (
    <>
      <Header addBg={true} />
      <div className="mx-10">
        <main className="w-full mx-auto">
          <VerifyEmail />
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Verification;
