import { useNavigate } from "react-router-dom";
export default function AdminDashboard() {
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
