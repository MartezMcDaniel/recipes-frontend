import React, { useState } from "react";
import axios from "axios";

function PostForm({ recipes }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cuisine: "",
    ingredientts: "",
    directions: "",
    image: "",
  });
  let http = "http://localhost:8000/recipes/";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post(http, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(setFormData);
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" name="cuisine" onChange={handleChange} />
        <label htmlFor="descrition">Descrition</label>
        <input type="text" name="description" onChange={handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" name="ingredients" onChange={handleChange} />
        <label htmlFor="directions">Directions</label>
        <input type="text" name="directions" onChange={handleChange} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" onChange={handleChange} />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default PostForm;
