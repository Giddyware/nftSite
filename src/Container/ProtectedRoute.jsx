// import Cookies from "js-cookie";
// import { useSelector } from "react-redux";
// import { Navigate, Route, useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const authToken = Cookies.get("authToken");
//   const navigate = useNavigate();
//   console.log(isAuthenticated);

//   return isAuthenticated || authToken ? { children } : navigate("/auth");
// };

// export default ProtectedRoute;

// import Cookies from "js-cookie";
// import { useSelector } from "react-redux";
// import { Outlet, Navigate, useNavigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const authToken = Cookies.get("authToken");
//   const navigate = useNavigate();

//   console.log(isAuthenticated);

//   if (isAuthenticated || authToken) {
//     return <Outlet />;
//   } else {
//     navigate("/auth");
//     return null;
//   }
// };

// export default ProtectedRoute;

import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ path, isAuthenticated, ...props }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authToken = Cookies.get("authToken");
  const navigate = useNavigate();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated && !authToken) {
      navigate("/auth");
    }
  }, [isAuthenticated, authToken, navigate]);

  return isAuthenticated || authToken ? <Route path={path} {...props} /> : null;
};

export default ProtectedRoute;
