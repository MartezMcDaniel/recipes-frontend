import React from "react";

function PostForm(props) {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" name="cuisine" />
        <label htmlFor="descrition">Descrition</label>
        <input type="text" name="description" />
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" name="ingredients" />
        <label htmlFor="directions">Directions</label>
        <input type="text" name="directions" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PostForm;
