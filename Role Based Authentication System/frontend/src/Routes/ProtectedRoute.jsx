import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children }) {
  const Token = localStorage.getItem("token");

  if (!Token) {
    return <Navigate to="/login" replace />;
  }
  try {
    const decoded = jwtDecode(Token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
    return children;
  } catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
}
