import { useEffect } from "react";
import api_instances from "../api/axios";
import { useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api_instances
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        console.log("Authorized Data:", res.data);
      })
      .catch((err) => {
        console.log("Unauthorized", err);
      });
  }, []);

  return (
    <h2>
      User Dashboard
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </h2>
  );
}
