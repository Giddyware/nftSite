import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnAuthenticated = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated, 'un');
  return !isAuthenticated ? children : <Navigate to={"/"} replace />;
};
export default UnAuthenticated;
