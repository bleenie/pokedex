import { useState, useEffect } from "react"
import "./style.scss"


export default function App() {
  const [allPokemon, setAllPokemon] = useState();
  const [pokemonData, setPokemonData] = useState();
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((response) => response.json())
    .then((json) => setAllPokemon(json));
  }, []);

  return (
    <>
    {allPokemon?.results.map(pokemon => (
      
      <div key={pokemon.name} className="card">
        <p>{pokemon.name}</p>
        <img src="`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}png`" alt={pokemon.name}></img>
      </div>
      ))}
      </>
  );
}


// {pokemonData.map(pokemon => (
//   <div className="card">
//     <p>{pokemon.name}</p>
//     <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
//   </div>
//   ))}







// useEffect(() => {
//   fetch(pokemonData?.results[0].url)
//   .then((response) => response.json())
//   .then((json) => setPokemonInfo(json))
//   .then 
// }, []);




// {pokemonData?.results.map(pokemon => (
// <div key={pokemon.name}>
//   <p>{pokemon.name}</p>
//   <img src={pokemonInfo?.sprites.front_default} alt={pokemonData?.results[0].name}></img>
// </div>
// ))}

// return (
//   <div className="pokemon">
//     <p className="pokemon-name">
//       Pokemon: {pokemonData?.results[0].name}
//     </p>
//     <img src={pokemonInfo?.sprites.front_default} alt={pokemonData?.results[0].name}></img>
    
//   </div>
//   );
