import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser({ decoded });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);

      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        setUser({ decoded });
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
