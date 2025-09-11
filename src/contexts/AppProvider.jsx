import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) ?? null;

  const [user, setUser] = useState(userInfo);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
