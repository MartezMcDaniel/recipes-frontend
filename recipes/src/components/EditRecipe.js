import { useState, useEffect } from "react";
import { useParams, Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

function EditRecipe() {
  const history = useHistory();
  const location = useLocation();
  const recipe = location.state;
  const [editData, setEditData] = useState({
    name: recipe.name,
    description: recipe.description,
    cuisine: recipe.cuisine,
    ingredients: recipe.ingredients,
    directions: recipe.directions,
  });
  const { id } = useParams();

  const updateRecipe = async () => {
    const response = await axios.put(
      `https://frozen-brook-00437.herokuapp.com/recipes/${id}`,
      editData
    );
    history.push("/recipes");
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe();
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={editData.name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="cuisine">Cuisine</label>
        <input
          type="text"
          value={editData.cuisine}
          name="cuisine"
          onChange={handleChange}
        />
        <label htmlFor="descrition">Descrition</label>
        <input
          type="text"
          value={editData.description}
          name="description"
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          value={editData.ingredients}
          name="ingredients"
          onChange={handleChange}
        />
        <label htmlFor="directions">Directions</label>
        <input
          type="text"
          value={editData.directions}
          name="directions"
          onChange={handleChange}
        />
        {/* <label htmlFor="image">Image</label> */}
        {/* <input type="text" name="image" onChange={handleChange} /> */}

        <input type="submit" value="Edit" onClick={handleSubmit} />
        <Link to="/recipes" className="cancel-btn">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default EditRecipe;
