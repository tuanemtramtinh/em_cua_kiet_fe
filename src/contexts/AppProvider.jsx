import { useState, useEffect } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo")) ?? null;
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) ?? null;
    setUser(userInfo);
  }, []);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
