import { useState, useEffect } from "react";
import "../style.scss";
import PokemonList from "../components/pokemon-list/PokemonList";

const Home = () => {
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
      <PokemonList pokemonData={pokemonData} />
    </>
  );
};

export default Home;

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
