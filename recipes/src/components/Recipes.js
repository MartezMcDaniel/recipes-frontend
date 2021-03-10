import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Recipes({ recipes, deleteRecipe }) {
  const deleteRecipeBackend = async (id) => {
    await axios
      .delete(`https://frozen-brook-00437.herokuapp.com/recipes/${id}`)
      .then((res) => {
        deleteRecipe(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Search />
      {recipes.map((item, index) => (
        <section key={index} className="recipe-card">
          <h1 key={item.id}>
            <Link to={`/recipes/${item.id}`}>{item.name}</Link>
          </h1>
          <img src={item.image} alt="Food" />
          <h4>{item.description}</h4>
          <h2>{item.cuisine}</h2>
          <h3>{item.ingredients}</h3>
          <h4>{item.directions}</h4>
          <Link
            to={{
              pathname: `/recipes/edit/${item.id}`,
              state: {
                ...item,
              },
            }}
          >
            <button>Update Recipe</button>
          </Link>
          <button
            onClick={() => {
              deleteRecipeBackend(item.id);
            }}
          >
            Delete
          </button>
        </section>
      ))}
    </div>
  );
}

export default Recipes;
