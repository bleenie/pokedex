import { useNavigate } from "react-router-dom";
import PokemonTypes from "../../pokemon-types/PokemonTypes";
import Favorite from "../../favorite/Favorite";
import "../cards.scss";

const Card = ({ pokemon }) => {
  //Navigate to details page
  const navigate = useNavigate();
  const handleClick = () => navigate(`/pokemon/${pokemon.id}`);

  return (
    <div onClick={handleClick} key={pokemon.name} className="card">
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      {pokemon.types.map((pokemontypes) => (
        <PokemonTypes type={pokemontypes.type.name} />
      ))}
      <Favorite pokemon={pokemon} />
    </div>
  );
};

export default Card;
