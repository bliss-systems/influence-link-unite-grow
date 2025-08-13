import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    const callbackUrl = location.pathname + location.search;
    return <Navigate to="/" state={{ callbackUrl }} replace />;
  }
  return children;
};
