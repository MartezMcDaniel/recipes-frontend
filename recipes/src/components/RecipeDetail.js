import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

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

  return (
    <div>
      <Nav />

      {Object.keys(recipe).length > 0 ? (
        <section>
          <p style={{ fontSize: "30px" }}>{recipe.name}</p>
          <img
            style={{ maxWidth: "600px", maxHeight: "600px" }}
            src={recipe.image}
            alt="food"
          />

          <p style={{ fontSize: "20px" }}>
            Ingredients: <br />
            {recipe.ingredients}
          </p>
          <p style={{ fontSize: "20px" }}>
            Directions: <br /> {recipe.directions}
          </p>
        </section>
      ) : null}
    </div>
  );
}

export default RecipeDetail;
