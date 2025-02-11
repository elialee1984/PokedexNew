import React, { useEffect, useState } from "react";

import PokemonAbilities from "./PokemonAbilities";
import PokemonSprites from "./PokemonSprites";
import PokemonTypes from "./PokemonTypes";

const PokemonDetails = ({ pokemonId }) => {
  const [pkmnFrontDefaultSprite, setPkmnFrontDefaultSprite] = useState();
  const [pkmnBackDefaultSprite, setPkmnBackDefaultSprite] = useState();
  const [pkmnFrontShinySprite, setPkmnFrontShinySprite] = useState();
  const [pkmnBackShinySprite, setPkmnBackShinySprite] = useState();
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [abilityOne, setAbilityOne] = useState("");
  const [abilityTwo, setAbilityTwo] = useState("");
  const [abilityThree, setAbilityThree] = useState(""); // might be unnecessary

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      const response = await data.json();
      // console.log(response);
      if (response) {
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
        if (response.types[0]) {
          setTypeOne(
            response.types[0].type.name[0].toUpperCase() +
              response.types[0].type.name.slice(1)
          );
        }
        if (response.types[1]) {
          setTypeTwo(
            response.types[1].type.name[0].toUpperCase() +
              response.types[1].type.name.slice(1)
          );
        }
        if (response.abilities[0]) {
          setAbilityOne(
            response.abilities[0].ability.name[0].toUpperCase() +
            response.abilities[0].ability.name.slice(1)
          );
        }
        if (response.abilities[1]) {
          setAbilityTwo(
            response.abilities[1].ability.name[0].toUpperCase() +
            response.abilities[1].ability.name.slice(1)
          );
        }
        if (response.abilities[2]) {
          setAbilityTwo(
            response.abilities[2].ability.name[0].toUpperCase() +
            response.abilities[2].ability.name.slice(1)
          );
        } // might be unnecessary
      } else {
        console.error("Types not found in response:", response);
      }
    };
    fetchPokemonDetails();
  }, [pokemonId]);

  return (
    <div>
      <PokemonSprites
        pkmnFrontDefaultSprite={pkmnFrontDefaultSprite}
        pkmnBackDefaultSprite={pkmnBackDefaultSprite}
        pkmnFrontShinySprite={pkmnFrontShinySprite}
        pkmnBackShinySprite={pkmnBackShinySprite}
      />
      <PokemonTypes typeOne={typeOne} typeTwo={typeTwo} />
      <PokemonAbilities abilityOne={abilityOne} abilityTwo={abilityTwo} abilityThree={abilityThree}/>
    </div>
  );
};

export default PokemonDetails;
