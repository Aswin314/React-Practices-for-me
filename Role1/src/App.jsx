import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminRoute from "./Routes/AdminRoutes";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashbaord";
import Dashboard from "./components/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      {/* USER ACCESS */}
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <UserDashboard />
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ADMIN ACCESS */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
