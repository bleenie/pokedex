import DetailsCard from "../components/details-card/DetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = ({ pokemonData }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const pageid = { id };

  useEffect(() => {
    getPokemon();
  });

  const getPokemon = () => {
    pokemonData.map((pokemon) => {
      if (pokemon.id == pageid.id) {
        setPokemon(pokemon);
      }
    });
  };

  //   useEffect(() => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //       .then((response) => response.json())
  //       .then((json) => setPokemon(json));
  //   }, []);

  return (
    <>
      <DetailsCard pokemon={pokemon} />
    </>
  );
};

export default PokemonDetails;
