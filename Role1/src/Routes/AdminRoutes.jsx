import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  const decoded = jwtDecode(token);
  if (decoded.role !== "admin") {
    return <Navigate to="/login" />;
  }
  if (token && decoded.role !== "admin") {
    return <Navigate to="/user" replace />;
  }

  return children;
};

export default AdminRoute;
