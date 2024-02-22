import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useAuthContext } from "../context/AuthContext";

const Nav = () => {
  const { role } = useAuthContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/manage">Manage</Link>
        </li>
      </ul>
      <p>{role}</p>
    </nav>
  );
};

export default Nav;
