import { useState } from "react";

const Favorite = ({ favorites, addFav, pokemon }) => {
  return (
    <div>
      {JSON.stringify(favorites).includes(JSON.stringify(pokemon)) ? (
        <button onClick={() => addFav({ pokemon })}>Remove from Team</button>
      ) : (
        <button onClick={() => addFav({ pokemon })}>Add to Team</button>
      )}
    </div>
  );
};

export default Favorite;
