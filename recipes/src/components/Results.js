import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Results(props) {
  const location = useLocation();
  const { state } = location;
  const search = state.search;

  console.log("searching for... ", search);

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "b1550a21";
  const APP_KEY = "aed3e4ef229f3e2d73363e922350ce71";

  useEffect(() => {
    const searchAPI = async () => {
      const url = `https://api.edamam.com/search?q=${search}&health=vegetarian&vegan&app_id=${APP_ID}&app_key=${APP_KEY}`;
      await axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          if (Array.isArray(res.data.hits)) {
            setRecipes(res.data.hits);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    searchAPI();
  }, []);

  return (
    <div>
      <section>
        {recipes.map((item) => (
          <div className="recipe-card">
            <p>{item.recipe.calories}</p>
            <img src={item.recipe.image} alt="image" />
            <p>{item.recipe.label}</p>
            <p>{item.recipe.healthLabels[0]}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Results;
