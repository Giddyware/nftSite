import Collection from "../Container/Collection";
import background from "../assets/background.jpg";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Category/Categories";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="h-screen">
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          "backdrop-filter": "blur(5px)",
        }}
      >
        <Header />
        <Categories />
      </div>
      <Collection />
      <Cards />
    </div>
  );
};
export default Home;
