import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Recipes({ recipes }) {
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
        </section>
      ))}
    </div>
  );
}

export default Recipes;
