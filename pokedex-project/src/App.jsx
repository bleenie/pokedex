import Home from "./views/Home";
import PokemonDetails from "./views/PokemonDetails";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((pokemons) => {
        Promise.all(
          pokemons.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        ).then((allPokemons) => {
          console.log(allPokemons);
          setPokemonData(allPokemons);
        });
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home pokemonData={pokemonData} />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetails pokemonData={pokemonData} />}
        />
      </Routes>
    </>
  );
};

export default App;
