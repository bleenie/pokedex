import { useEffect, useState } from "react";
import Card from "../card/Card";
import SearchBar from "../search-bar/SearchBar";

const PokemonList = ({ pokemonData }) => {
  //Search bar filtering
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);
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

  return (
    <>
      <SearchBar
        pokemonData={pokemonData}
        setFilteredPokemon={setFilteredPokemon}
      />
      {filteredPokemon.map((pokemon) => (
        <Card favorites={favorites} addFav={addFav} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonList;
