import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoleContext } from "../context/RoleContext.jsx";

export default function Navbar() {
  const { token, role, logout } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      {!token && <Link to="/login">Login</Link>}

      {token && role === "admin" && <Link to="/admin">Admin Panel</Link>}

      {token && role === "user" && <Link to="/user">User Panel</Link>}

      {token && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
