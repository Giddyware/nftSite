import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation().pathname;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
}

export default ProtectedRoute;
