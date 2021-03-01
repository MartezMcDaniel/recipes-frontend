import React from "react";
import Recipes from "./Recipes";

function RecipeData({ recipes }) {
  return (
    <div>
      {recipes.map((item) => (
        <Recipes key={item.id} recipes={item} />
      ))}
    </div>
  );
}

export default RecipeData;
