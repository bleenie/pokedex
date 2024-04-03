import { useState, useEffect } from "react"
import "./style.scss"


export default function App() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then((response) => response.json())
    .then((json) => setPokemonData(json));
  }, []);

  useEffect(() => {
    fetch(pokemonData?.results[0].url)
    .then((response) => response.json())
    .then((json) => setPokemonInfo(json));
  }, []);

  return <div className="pokemon">
    {
      <>
    <p className="pokemon-name">
      Pokemon: {pokemonData?.results[0].name}
    </p>
    <img src={pokemonInfo?.sprites.front_default} alt={pokemonData?.results[0].name}></img>
    </>
    }
  </div>
}

