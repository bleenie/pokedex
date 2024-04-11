import "./type.scss";
import typeColor from "./typeColor";

const PokemonTypes = ({ type }) => {
  const typeUpperCase = type.toUpperCase();
  const typeColorMain = typeColor[type][0];
  const typeColorSub = typeColor[type][1];

  return (
    <div
      style={{
        backgroundColor: typeColorMain,
        boxShadow: `inset -2px -2px 5px ${typeColorSub}`,
      }}
      className="type oswald-font"
    >
      <p>{typeUpperCase}</p>
    </div>
  );
};

export default PokemonTypes;
