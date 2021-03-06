import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    cuisine: "",
    ingredientts: "",
    directions: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      await axios
        .get(`https://frozen-brook-00437.herokuapp.com/recipes/${id}`)
        .then((res) => {
          console.log(res.data);
          setRecipe(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getRecipe();
  }, [id]);

  const updateRecipe = async () => {
    await axios
      .put(`https://frozen-brook-00437.herokuapp.com/recipes/${id}`, editData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="recipe-card">
      {Object.keys(recipe).length > 0 ? (
        <section>
          <p>{recipe.name}</p>
          <Link to="/create">
            <p>Edit Recipe</p>
          </Link>
          <p>{recipe.ingredients}</p>
          <img src={recipe.image} alt="food" />
        </section>
      ) : null}
    </div>
  );
}

export default RecipeDetail;
