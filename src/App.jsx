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
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useRef } from "react";

import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CollectionPage from "./pages/CollectionPage";
import Dashboard from "./pages/Dashboard";
import RecentSalesTable from "./components/UI/RecentSalesTable";
import Mint from "./pages/Mint";
import Deposit from "./pages/Deposit";
import SupportAdmin from "./components/SupportAdmin/SupportAdmin";
import ProtectedRoute from "./Container/ProtectedRoute";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./components/UI/VerifyEmail";

import UnAuthenticated from "./Container/UnAuthenticated";
import MarketPlace from "./pages/MarketPlace";
// import SupportAdmin from "./components/SupportAdmin";

// function App() {
//   const RecentSalesTableRef = useRef(null);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/auth",
//       element: <Auth />,
//     },
//     {
//       path: "/product",
//       element: <ProductDetail />,
//     },
//     {
//       path: "/collection/mew",
//       element: <CollectionPage />,
//     },
//     {
//       path: "/deposit",
//       element: <Deposit />,
//     },
//     {
//       path: "dashboard",
//       element: <Dashboard />,
//       children: [
//         {
//           path: "RecentSalesTable",
//           element: (
//             <RecentSalesTable RecentSalesTableRef={RecentSalesTableRef} />
//           ),
//         },
//         { path: "mint", element: <Mint /> },
//       ],
//     },
//     { path: "mint", element: <Mint /> },
//     { path: "support", element: <SupportAdmin /> },
//     ,
//   ]);

//   // createRoutesFromElements(
//   //   <Routes>
//   //     <Route indev element={<Home />} />
//   //     <Route path="/auth" element={<Auth />} />
//   //     <Route path="/Collection" element={<CollectionPage />} />
//   //     <Route path="/dashboard" element={<Dashboard />} />
//   //   </Routes>
//   // )

//   return <RouterProvider router={router} />;
// }

// export default App;

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // TODO:Replace with the fallback path for unauthenticated users
  const fallbackPath = "/auth"; // Replace with the fallback path for unauthenticated users

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/auth"
          element={
            // <UnAuthenticated>
            <Auth />
            // </UnAuthenticated>
          }
        />
        <Route path="/verify_email" element={<VerifyEmail />} />
        <Route
          path="/marketPlace"
          element={
            <ProtectedRoute>
              <MarketPlace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createNft"
          element={
            <ProtectedRoute>
              <Mint />
            </ProtectedRoute>
          }
        />

        <Route path="/buyNft" element={<Mint />} />
        <Route
          path="/marketPlace/products/:productId"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
