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
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

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
import Withdraw from "./components/UI/Withdraw";
import Cookies from "js-cookie";

import LoginPage from "./pages/LoginPage";
import Art from "./pages/Art";
import Gaming from "./pages/Gaming";
import Membership from "./pages/Membership";
import Pfps from "./pages/Pfps";
import Photography from "./pages/Photography";
// import SupportAdmin from "./components/SupportAdmin";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // TODO:Replace with the fallback path for unauthenticated users
  const fallbackPath = "/auth"; // Replace with the fallback path for unauthenticated users
  console.log(isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  // Check for authentication token on app initialization
  useEffect(() => {
    const token = Cookies.get("authToken");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/auth"
          element={
            <UnAuthenticated>
              <Auth />
            </UnAuthenticated>
          }
        />
        <Route path="/dashboard/verify_email" element={<VerifyEmail />} />
        <Route
          path={`/category=marketplace`}
          element={
            <ProtectedRoute>
              <MarketPlace name="Market Place" />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/category=arts`}
          element={
            <ProtectedRoute>
              <Art name="Art" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category=gaming"
          element={
            <ProtectedRoute>
              <Gaming name="Gaming" />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/category=membership`}
          element={
            <ProtectedRoute>
              <Membership name="Membership" />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/category=pfps`}
          element={
            <ProtectedRoute>
              <Pfps name="PFPs" />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/category=photography`}
          element={
            <ProtectedRoute>
              <Photography name="Photography" />
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

        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/createNft"
          element={
            <ProtectedRoute>
              <Mint />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/dashboard/deposit"
          element={
            <ProtectedRoute>
              <Deposit />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          }
        />

        {/* <Route path="dashboard/buyNft" element={<Mint />} /> */}
        <Route
          path={`products/:productId`}
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
