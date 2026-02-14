import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./components/DashBoard";
import AxiosUsers from "./page/ApiPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/apipage"
        element={
          <ProtectedRoute>
            <AxiosUsers />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
