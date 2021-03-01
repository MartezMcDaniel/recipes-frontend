import React from "react";

function Recipes({ recipes }) {
  return (
    <div className="recipe-card">
      <h1>{recipes.name}</h1>
      <img src={recipes.image} alt="Food" />
      <h4>{recipes.description}</h4>
      <h2>{recipes.cuisine}</h2>
      <h3>{recipes.ingredients}</h3>
      <h4>{recipes.directions}</h4>
    </div>
  );
}

export default Recipes;
