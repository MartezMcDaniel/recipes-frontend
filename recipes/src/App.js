import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Recipes from "./components/Recipes";
import Results from "./components/Results";
import PostForm from "./components/PostForm";
import RecipeDetail from "./components/RecipeDetail";
import Nav from "./components/Nav";
import editRecipe from "./components/EditRecipe";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const [recipes, setRecipes] = useState([]);

  let http = "https://frozen-brook-00437.herokuapp.com/recipes/";

  useEffect(() => {
    const getRecipes = async () => {
      await axios
        .get(http)
        .then((res) => {
          console.log("recipes", res.data);
          setRecipes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getRecipes();
  }, [http]);

  const updateRecipe = (editedRecipe) => {
    const recipesClone = recipes;
    const recipeIndex = recipesClone.findIndex((recipe) => {
      return recipe.id === editedRecipe.id;
    });
    recipesClone.splice(recipeIndex, 1, editedRecipe);
    setRecipes(recipesClone);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" exact render={() => <Search />} />
          <Route
            exact
            path="/recipes"
            render={() => (
              <Recipes
                recipes={recipes}
                updateRecipe={updateRecipe}
                deleteRecipe={deleteRecipe}
              />
            )}
          />
          <Route path="/recipes/:id" exact render={() => <RecipeDetail />} />
          <Route path="/results" exact render={() => <Results />} />
          <Route path="/create" component={PostForm} />
          <Route path="/recipes/edit/:id" component={editRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
