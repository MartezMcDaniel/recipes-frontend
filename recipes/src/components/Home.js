import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="border">
      <div className="homepage">
        <h1>Welcome to VegOut!</h1>
        <h2>Please select an option below...</h2>
        <div>
          <section className="box2">
            <Link
              to="/recipes"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h3 className="saved">View Saved Recipes</h3>
            </Link>
            <Link
              to="/search"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h3 className="searched">Search for Recipes</h3>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
