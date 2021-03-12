import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
require("dotenv").config();

function Results(props) {
  const location = useLocation();
  const { state } = location;
  const search = state.search;

  const [recipes, setRecipes] = useState([]);

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  console.log(process.env);

  useEffect(() => {
    const searchAPI = async () => {
      const url = `https://api.edamam.com/search?q=${search}&health=vegetarian&health=vegan&app_id=${API_ID}&app_key=${API_KEY}&to=5`;
      await axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          if (Array.isArray(res.data.hits)) {
            setRecipes(res.data.hits);
            console.log(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    searchAPI();
  }, []);

  return (
    <div className="entire-card">
      <Nav />
      {Object.keys(recipes).length > 0 ? (
        <section>
          {recipes.map((item) => (
            <div className="card">
              <img src={item.recipe.image} alt="image" />
              <p style={{ fontSize: "30px" }}>{item.recipe.label}</p>
              <a
                style={{ fontSize: "20px" }}
                href={item.recipe.url}
                target="blank"
              >
                View Recipe
              </a>
            </div>
          ))}
        </section>
      ) : (
        <section>
          "Item Not Found"
          <Link to="/recipes">
            <button>Return to Search</button>
          </Link>
        </section>
      )}
    </div>
  );
}

export default Results;
