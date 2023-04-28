import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import background from "./assets/background.jpg";

// import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
    </div>
  );
}

export default App;
