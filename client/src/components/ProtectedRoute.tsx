import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useAuth();

  if (token === null) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}
