import DetailsCard from "../components/cards/details-card/DetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = ({ pokemonData }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    pokemonData.map((pokemon) => {
      if (pokemon.id == id) {
        setPokemon(pokemon);
      }
    });
  };

  return (
    <>
      <DetailsCard pokemon={pokemon} />
    </>
  );
};

export default PokemonDetails;
