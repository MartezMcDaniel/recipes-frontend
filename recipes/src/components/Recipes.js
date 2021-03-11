import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

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
      <Nav />
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
                <section>
                  <Link
                    to={{
                      pathname: `/recipes/edit/${item.id}`,
                      state: {
                        ...item,
                      },
                    }}
                  >
                    <button className="del-bttn">Update Recipe</button>
                  </Link>
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteRecipeBackend(item.id);
                    }}
                  >
                    Delete
                  </button>

                  <Link to={`/recipes/${item.id}`}>View Recipe</Link>
                </section>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
