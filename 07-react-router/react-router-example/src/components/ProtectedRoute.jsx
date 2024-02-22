import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const routeRules = {
  "/admin": ["ADMIN"],
  "/manage": ["MANAGE"],
  "/user": ["USER", "ADMIN", "MANAGE"],
};
const ProtectedRoute = ({ children }) => {
  const { role } = useAuthContext();
  const location = useLocation();
  const hasPermission = routeRules[location.pathname].includes(role);

  return hasPermission ? (
    <>{children}</>
  ) : (
    <div>Sorry, you don't have permission to see this page.</div>
  );
};

export default ProtectedRoute;
