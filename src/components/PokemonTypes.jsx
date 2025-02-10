import React, { useState } from "react";

const PokemonTypes = ({ pokemonTypes }) => {
  const [typeOne, setTypeOne] = useState();
  const [typeTwo, setTypeTwo] = useState();

  if (pokemonTypes.types[0].type.name) {
    setTypeOne(pokemonTypes.types[0].type.name);
  }
  if (pokemonTypes.types[1].type.name) {
    setTypeTwo(pokemonTypes.types[1].type.name);
  }
  // console.log(pokemonTypes.types[0].type.name);

  return <div>Hi</div>;
};

export default PokemonTypes;
