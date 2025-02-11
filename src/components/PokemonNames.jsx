import React from "react";

const PokemonNames = ({ pokemon }) => {
  return (
    <div>
      <div> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
    </div>
  );
};

export default PokemonNames;
