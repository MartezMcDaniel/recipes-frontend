import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <nav className="navbar">
        <h3 className="brand">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            VegOut{" "}
          </Link>
        </h3>

        <ul className="bullets">
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/recipes"
            >
              Saved Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/create"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
