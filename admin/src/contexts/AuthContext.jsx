import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("adminAuth") === "true";
  });

  const [adminUser, setAdminUser] = useState(() => {
    const stored = localStorage.getItem("adminUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      const user = {
        name: "Admin User",
        email: "admin@gmail.com",
        role: "Administrator",
      };
      setIsAuthenticated(true);
      setAdminUser(user);
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminUser");
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAuthenticated, login, logout, adminUser }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
};
