import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <h3>VegOut</h3>
        </Link>
        <ul className="bullets">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/recipes"
          >
            <li>Saved Recipes</li>
          </Link>
          <Link
            to="/search"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li>Search</li>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/create"
          >
            <li>Create</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
