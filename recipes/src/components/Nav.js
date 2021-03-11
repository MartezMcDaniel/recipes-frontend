import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar">
      <h3>Veggieland</h3>
      <ul className="bullets">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/recipes"
        >
          <li>Home</li>
        </Link>
        <Link style={{ color: "inherit", textDecoration: "inherit" }}>
          <li>Login</li>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/create"
        >
          <li>Create</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
