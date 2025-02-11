import React, { useEffect, useState } from "react";

import PokemonSprites from "./PokemonSprites";
import PokemonTypes from "./PokemonTypes";

const PokemonDetails = ({ pokemonId }) => {
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [pkmnFrontDefaultSprite, setPkmnFrontDefaultSprite] = useState();
  const [pkmnBackDefaultSprite, setPkmnBackDefaultSprite] = useState();
  const [pkmnFrontShinySprite, setPkmnFrontShinySprite] = useState();
  const [pkmnBackShinySprite, setPkmnBackShinySprite] = useState();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      const response = await data.json();
      console.log(response);
      if (response) {
        setTypeOne(
          response.types[0].type.name[0].toUpperCase() +
            response.types[0].type.name.slice(1)
        );
        if (response.sprites.front_default) {
          setPkmnFrontDefaultSprite(response.sprites.front_default);
        }
        if (response.sprites.back_default) {
          setPkmnBackDefaultSprite(response.sprites.back_default);
        }
        if (response.sprites.front_shiny) {
          setPkmnFrontShinySprite(response.sprites.front_shiny);
        }
        if (response.sprites.back_shiny) {
          setPkmnBackShinySprite(response.sprites.back_shiny);
        }
        if (response.types[1]) {
          setTypeTwo(
            response.types[1].type.name[0].toUpperCase() +
              response.types[1].type.name.slice(1)
          );
        }
      } else {
        console.error("Types not found in response:", response);
      }
    };
    fetchPokemonDetails();
  }, [pokemonId]);

  return (
    <div>
      <PokemonTypes typeOne={typeOne} typeTwo={typeTwo} />
      <PokemonSprites
        pkmnFrontDefaultSprite={pkmnFrontDefaultSprite}
        pkmnBackDefaultSprite={pkmnBackDefaultSprite}
        pkmnFrontShinySprite={pkmnFrontShinySprite}
        pkmnBackShinySprite={pkmnBackShinySprite}
      />
    </div>
  );
};

export default PokemonDetails;
