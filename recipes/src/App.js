import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Recipes from "./components/Recipes";
import Results from "./components/Results";
import PostForm from "./components/PostForm";
import RecipeDetail from "./components/RecipeDetail";
import Nav from "./components/Nav";

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
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route
            exact
            path="/recipes"
            render={() => <Recipes recipes={recipes} />}
          />
          <Route path="/recipes/:id" exact render={() => <RecipeDetail />} />
          <Route path="/results" exact render={() => <Results />} />
          <Route path="/create" component={PostForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
