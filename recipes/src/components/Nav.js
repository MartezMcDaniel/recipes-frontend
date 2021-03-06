import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/recipes">
          <li>Home</li>
        </Link>
        <Link>
          <li>Login</li>
        </Link>
        <Link to="/create">
          <li>Create</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
