import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const Expire = localStorage.getItem("expiryTime") || null;

    if (storedToken && storedRole && Expire) {
      if (Date.now() > +Expire) {
        logout();
      } else {
        setToken(storedToken);
        setRole(storedRole);
        setTimeout(() => {
          logout();
        }, Expire - Date.now());
      }
    }
  }, []);
  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setToken(token);
    setRole(role);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("expiryTime");
    setToken(null);
    setRole(null);
  };
  return (
    <RoleContext.Provider value={{ token, role, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};
