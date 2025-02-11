import React from "react";

const PokemonAbilities = ({ abilityOne, abilityTwo, abilityThree }) => {
  return (
    <div>
      <p>
        Abilities: 1. {abilityOne}
        {"\n"}
        {abilityTwo ? `2. ${abilityTwo}` : ""}{" "}
        {abilityThree ? `3. ${abilityThree}` : ""}{" "}
      </p>
    </div>
  );
};

export default PokemonAbilities;
