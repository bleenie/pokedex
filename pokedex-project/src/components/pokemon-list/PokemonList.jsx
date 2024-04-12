import Card from "../cards/card/Card";

const PokemonList = ({ filteredPokemon }) => {
  return (
    <>
      {filteredPokemon.map((pokemon) => (
        <Card pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonList;
