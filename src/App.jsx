import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import background from "./assets/background.jpg";
import Categories from "./components/Category/Categories";
import TableHead from "./components/tableHead/tableHead";
import Collection from "./Container/Collection";
// import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen" style={{ backgroundImage: `url(${background})`, "backdrop-filter": "blur(5px)" }}>
      <Header />
      <Categories />
      <Collection />
    </div>
  );
}

export default App;
