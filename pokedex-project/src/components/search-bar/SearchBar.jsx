import { useState, useEffect } from "react";

const SearchBar = ({ pokemonData, setFilteredPokemon }) => {
  //Search for pokemon
  const [searchItem, setSearchItem] = useState("");

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
    <input
      type="text"
      value={searchItem}
      onChange={handleInputChange}
      placeholder="Type to search"
    />
  );
};

export default SearchBar;
