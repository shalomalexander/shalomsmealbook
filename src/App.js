import React, { useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const API_ID = "e03d7870";
  const API_KEY = "7ce01a987b96bf2c574a45aa66f2d384";
  const [allRecipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipe = async () => {
    const getData = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const finalData = await getData.json();
    setRecipe(finalData.hits);
  };
 
  const updateSearch = e => {
    setSearch(e.target.value)
  };
  const getSearch = e => {
    e.preventDefault();
    getRecipe();
    setSearch('');
    
  };
  return (
    <div className="Outer">
      <div className="App">
        <h2 className="text-center h2Style">Shalom's MealBook <span role="img" aria-label="fork and knife">🍽️</span></h2>
        <form onSubmit={getSearch} className="form">
          <input type="text" className="input" value={search} placeholder= "chicken, beef, pancake etc..."onChange={updateSearch}></input>
          <button type="submit" className="search">Search</button>
        </form>
        <div className="cards-container">
          {allRecipe.map((r) => (
            <Recipe
              id={r.recipe.label}
              key={r.recipe.label}
              title={r.recipe.label}
              label={r.recipe.label}
              calory={r.recipe.calories}
              image={r.recipe.image}
              ingredients={r.recipe.ingredients}
              url={r.recipe.url}
            />
          ))}
        </div>
        
      </div>
      <div className="footer-copyright text-center py-3">
          
        Copyright &copy; shalomalexander <span role="img" aria-label="red-heart">❤️</span>
          
      </div>
    </div>
  );
}

export default App;
