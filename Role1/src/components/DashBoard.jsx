import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setData(res.data.message);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div>DashBoard is protected</div>
      <button onClick={handleLogout}>Logout</button>
      <h2>{data}</h2>
    </>
  );
};

export default DashBoard;
