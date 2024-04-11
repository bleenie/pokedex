import { useEffect, useState } from "react";
import Card from "../card/Card";

const PokemonList = ({ pokemonData }) => {
  //Manage favorite pokemon
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const addFav = (selectedPokemon, e) => {
    e.stopPropagation();
    let array = favorites;
    let addArray = true;
    array.map((favorite, key) => {
      if (JSON.stringify(favorite) === JSON.stringify(selectedPokemon)) {
        console.log("Already in favorites list, Pokemon will be deleted"); //verwijder
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(selectedPokemon);
    }
    setFavorites([...array]);
    console.log(favorites); //verwijder

    localStorage.setItem("favorites", JSON.stringify(favorites));

    const storage = localStorage.getItem("favItem" + selectedPokemon || "0");
    if (storage == null) {
      localStorage.setItem(
        "favItem" + selectedPokemon.key,
        JSON.stringify(selectedPokemon)
      );
    } else {
      localStorage.removeItem("favItem" + selectedPokemon);
    }
  };

  //Search for pokemon
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
        <Card favorites={favorites} addFav={addFav} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonList;
