import DetailsCard from "../components/cards/details-card/DetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = ({ pokemonData }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    console.log(pokemonData);
    const foundPokemon = pokemonData.find((pokemon) => pokemon.id == id);
    setPokemon(foundPokemon);
  }, []);

  if (!pokemon) {
    return <>Loading....</>;
  }

  return <>{pokemon ? <DetailsCard pokemon={pokemon} /> : ""}</>;
};

export default PokemonDetails;
