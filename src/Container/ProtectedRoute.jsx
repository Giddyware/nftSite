import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const isEmailVerified = useSelector(
    (state) => state.auth.user?.user?.emailVerified
  );
  const location = useLocation().pathname;

  // return isAuthenticated ? (
  //   children
  // ) : (
  //   <Navigate to="/auth" state={{ from: location }} />
  // );

  if (!isAuthenticated) {
    // User is not authenticated, redirect to the authentication page
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  if (!isEmailVerified) {
    // User's email is not verified, redirect to the verify_email page
    return <Navigate to="/verify_email" replace />;
  }

  // User is authenticated and email is verified, render the protected content
  return children;
}

export default ProtectedRoute;
