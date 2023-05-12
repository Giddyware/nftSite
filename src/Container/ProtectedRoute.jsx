import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authToken = Cookies.get("authToken");

  return isAuthenticated || authToken ? (
    { children }
  ) : (
    <Navigate to="/login" replace />
  );
};

//   if (!isSignedIn) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

export default ProtectedRoute;
