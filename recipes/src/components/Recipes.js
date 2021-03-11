import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

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
      <div className="entire-page">
        <div className="page">
          <div className="container">
            {recipes.map((item, index) => (
              <section key={index} className="recipe-card">
                <h1 key={item.id}>
                  <img src={item.image} alt="Food" />
                </h1>
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>
                <h4>{item.cuisine}</h4>

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

                <Link to={`/recipes/${item.id}`}>View Recipe</Link>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
