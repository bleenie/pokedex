import { useState } from "react";

const Favorite = ({ favorites, addFav, pokemon }) => {
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
