import PokemonTypes from "../../pokemon-types/PokemonTypes";
import BattleStats from "../../battle-stats/BattleStats";
import "../cards.scss";
import HomeButton from "../../home-button/HomeButton";

const DetailsCard = ({ pokemon }) => {
  return (
    <div className="card-detail">
      <HomeButton />
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name}></img>
      <img src={pokemon.sprites?.back_default} alt={pokemon.name}></img>
      {pokemon.types?.map((pokemontypes) => (
        <PokemonTypes type={pokemontypes.type.name} />
      ))}
      <p>Height: {pokemon.height * 10} cm</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <BattleStats pokemon={pokemon} />
    </div>
  );
};

export default DetailsCard;
