// import "./App.css";
import Header from "./components/Header/Header";
import background from "./assets/background.jpg";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Category/Categories";
import TableHead from "./components/tableHead/tableHead";
// import Collection from "./Container/Collection";
import ConnectWallet from "./components/UI/ConnectWallet";
import Overlay from "./components/UI/Overlay";
import Login from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";
import Auth from "./Container/Auth";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CollectionPage from "./pages/CollectionPage";
import Dashboard from "./pages/Dashboard";
import RecentSalesTable from "./components/UI/RecentSalesTable";
import { useRef } from "react";
import Mint from "./pages/Mint";
import Deposit from "./pages/Deposit";

function App() {
  const RecentSalesTableRef = useRef(null);

  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "/deposit",
      element: <Deposit />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "RecentSalesTable",
          element: (
            <RecentSalesTable RecentSalesTableRef={RecentSalesTableRef} />
          ),
        },
        { path: "mint", element: <Mint /> },
      ],
    },
    { path: "mint", element: <Mint /> },
    ,
  ]);

  // createRoutesFromElements(
  //   <Routes>
  //     <Route indev element={<Home />} />
  //     <Route path="/auth" element={<Auth />} />
  //     <Route path="/Collection" element={<CollectionPage />} />
  //     <Route path="/dashboard" element={<Dashboard />} />
  //   </Routes>
  // )

  return <RouterProvider router={router} />;
}

export default App;
