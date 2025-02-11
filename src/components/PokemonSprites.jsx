import React from "react";

const PokemonSprites = ({
  pkmnFrontDefaultSprite,
  pkmnBackDefaultSprite,
  pkmnFrontShinySprite,
  pkmnBackShinySprite,
}) => {
  return (
    <div>
      <img src={pkmnFrontDefaultSprite} />
      <img src={pkmnFrontShinySprite} />
      {/* <img src={pkmnBackDefaultSprite} /> */}
      {/* <img src={pkmnBackShinySprite} /> */}
    </div>
  );
};

export default PokemonSprites;
