import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  let http = "http://localhost:8000/recipes/";

  useEffect(() => {
    const getRecipes = async () => {
      await axios
        .get(http)
        .then((res) => {
          console.log(res.data);
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
        <Recipe recipes={recipes} />
      </div>
    </Router>
  );
}

export default App;
