import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonTypes from "../pokemon-types/PokemonTypes";
import Favorite from "../favorite/Favorite";

const PokemonList = ({ pokemonData }) => {
  //Manage favorite pokemon
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");
  const navigate = useNavigate();

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);
  const addFav = (selectedPokemon) => {
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
      localStorage.setItem("favItem" + selectedPokemon);
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

  //redirect link
  const handleClick = () => navigate("/pokemon");

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.name} className="card" onClick={handleClick}>
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          {pokemon.types.map((pokemontypes) => (
            <PokemonTypes type={pokemontypes.type.name} />
          ))}
          <Favorite favorites={favorites} addFav={addFav} pokemon={pokemon} />
        </div>
      ))}
    </>
  );
};

export default PokemonList;
