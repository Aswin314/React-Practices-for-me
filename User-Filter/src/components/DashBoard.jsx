import React from "react";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div>DashBoard is protected</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default DashBoard;
