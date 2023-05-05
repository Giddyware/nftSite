import "./App.css";
import Header from "./components/Header/Header";
import background from "./assets/background.jpg";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Category/Categories";
import TableHead from "./components/tableHead/tableHead";
import Collection from "./Container/Collection";
import ConnectWallet from "./components/UI/ConnectWallet";
import Overlay from "./components/UI/Overlay";
import Login from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";
import Auth from "./Container/Auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CollectionPage from "./pages/CollectionPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/product",
      element: <ProductDetail />,
    },
    {
      path: "/collection/mew",
      element: <CollectionPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
