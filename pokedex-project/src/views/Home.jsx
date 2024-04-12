import PokemonList from "../components/pokemon-list/PokemonList";
import SearchBar from "../components/search-bar/SearchBar";
import { useState } from "react";

const Home = ({ pokemonData }) => {
  //Create variable for list of visible pokemon based on filter
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);

  return (
    <>
      <SearchBar
        pokemonData={pokemonData}
        setFilteredPokemon={setFilteredPokemon}
      />
      <PokemonList filteredPokemon={filteredPokemon} />
    </>
  );
};

export default Home;
