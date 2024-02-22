import React, { useEffect, useState, useContext } from "react";

const getUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ login: true, role: "ADMIN" });
    }, 3000);
  });
};
export const AuthContext = React.createContext({
  isAuthenticated: false,
  role: "USER",
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("USER");
  useEffect(() => {
    setIsLoading(true);
    getUser().then((data) => {
      setIsLoading(false);
      setIsAuthenticated(data.login);
      setRole(data.role);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, role, setRole, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
