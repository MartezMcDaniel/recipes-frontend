import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeData from "./components/RecipeData";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PostForm from "./components/PostForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  let http = "http://localhost:8000/recipes/";

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
        <Switch>
          <Route
            path="/recipes"
            exact
            render={() => <RecipeData recipes={recipes} />}
          />
          <Route path="/create" component={PostForm} recipes={recipes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
