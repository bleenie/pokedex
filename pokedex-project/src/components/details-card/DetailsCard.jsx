import { useNavigate } from "react-router-dom";
import PokemonTypes from "../pokemon-types/PokemonTypes";
import Favorite from "../favorite/Favorite";

const DetailsCard = ({ pokemon }) => {
  return (
    <div className="card-detail">
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name}></img>
      <img src={pokemon.sprites?.back_default} alt={pokemon.name}></img>
      {pokemon.types?.map((pokemontypes) => (
        <PokemonTypes type={pokemontypes.type.name} />
      ))}
      <p>Height: {pokemon.height * 10} cm</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
    </div>
  );
};

export default DetailsCard;
