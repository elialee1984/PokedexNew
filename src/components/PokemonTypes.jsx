import React from "react";

const PokemonTypes = ({ typeOne, typeTwo }) => {
  return (
    <div>
      {!typeTwo ? (
        <div>Type: {typeOne}</div>
      ) : (
        <div>
          Types: {typeOne}/{typeTwo}
        </div>
      )}
    </div>
  );
};

export default PokemonTypes;
