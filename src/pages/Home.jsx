import Collection from "../Container/Collection";
import background from "../assets/background.jpg";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Category/Categories";
import Header from "../components/Header/Header";

const Home = () => {
//   return (
//     <div className="h-screen">
//       <div
//         className=""
//         style={{
//           backgroundImage: `url(${background})`,
//           "backdrop-filter": "blur(5px)",
//         }}
//       >
//         <Header />
//         <Categories />
//       </div>
//       <Collection />
//       <Cards />
//     </div>
//   );
  const [count, setCount] = useState(0);
  const [showModal, setShowmodal] = useState(false)

  const ModalStatus = () => {
    console.log("wroking")
    setShowmodal((prev) => !prev)
}

<<<<<<< ezekiel
  return (
    <div className="h-screen w-full relative">
      <Overlay show={showModal} clear={ModalStatus}/>
      <ConnectWallet show={showModal} modalStatus={ModalStatus} />
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          "backdrop-filter": "blur(5px)",
        }}
      >
        <Header  showModal={ModalStatus}/>
        <Categories />
      </div>
      <Collection />
      <Cards />
    </div>
  );

  
};
export default Home;
