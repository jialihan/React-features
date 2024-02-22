import React from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import useRedirect from "../hooks/redirectRoute";
const RedirectHandler = ({ children }) => {
  const { redirectUrl, isLoading } = useRedirect();

  if (isLoading) {
    return <LoadingPage />;
  }
  if (redirectUrl) {
    return <Navigate to={redirectUrl} replace />;
  }
  return <>{children}</>;
};

export default RedirectHandler;
