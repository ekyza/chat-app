import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";

import ProtectedRoute from "./components/ProtectedRoute";
import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

export default function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-up" element={token === null ? <SignUpPage /> : <Navigate to="/" />} />
      <Route path="/sign-in" element={token === null ? <SignInPage /> : <Navigate to="/" />} />
    </Routes>
  );
}
