import { useEffect, useState } from "react";
import PokemonTypes from "../pokemon-types/PokemonTypes";

const FilteredPokemon = ({ pokemonData }) => {
  //   const items = [];
  //   {
  //     pokemonData.map((pokemon) => pokemon.push(items));
  //   }

  const [searchItem, setSearchItem] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPokemon(filteredItems);
  };

  useEffect(() => {
    setFilteredPokemon(pokemonData);
  }, [pokemonData]);

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.name} className="card">
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          {pokemon.types.map((pokemontypes) => (
            <PokemonTypes type={pokemontypes.type.name} />
          ))}
        </div>
      ))}
      {/* <ul>
        {filteredPokemon.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default FilteredPokemon;
