import { useState, useEffect } from "react";

const Favorite = ({ pokemon }) => {
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
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(selectedPokemon);
    }
    setFavorites([...array]);

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
    <div>
      {JSON.stringify(favorites).includes(JSON.stringify(pokemon)) ? (
        <button onClick={(e) => addFav({ pokemon }, e)}>
          Remove from Team
        </button>
      ) : (
        <button onClick={(e) => addFav({ pokemon }, e)}>Add to Team</button>
      )}
    </div>
  );
};

export default Favorite;
