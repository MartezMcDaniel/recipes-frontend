import { useState, useEffect } from "react";
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

  return (
    <div>
      {Object.keys(recipe).length > 0 ? (
        <section>
          <p style={{ fontSize: "20px" }}>{recipe.name}</p>
          <img
            style={{ maxWidth: "600px", maxHeight: "600px" }}
            src={recipe.image}
            alt="food"
          />

          <p>
            Ingredients: <br />
            {recipe.ingredients}
          </p>
          <p>
            Directions: <br /> {recipe.directions}
          </p>
        </section>
      ) : null}
    </div>
  );
}

export default RecipeDetail;
