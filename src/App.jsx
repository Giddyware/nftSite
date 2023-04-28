import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import background from "./assets/background.jpg";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Category/Categories";
import TableHead from "./components/tableHead/tableHead";
import Collection from "./Container/Collection";

function App() {
  const [count, setCount] = useState(0);

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
}

export default App;
