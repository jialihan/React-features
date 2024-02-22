import { useAuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const redirectrules = {
  ADMIN: "/admin",
  USER: "/",
  MANAGE: "/manage",
};
export default function useRedirect() {
  const { role, isLoading } = useAuthContext();
  let redirectUrl = redirectrules[role];
  const { pathname } = useLocation();
  console.log("current pathName");
  if (pathname === redirectUrl) {
    redirectUrl = undefined;
  }
  return { isLoading, redirectUrl };
}
