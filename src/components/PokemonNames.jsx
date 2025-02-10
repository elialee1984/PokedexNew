import React, { useEffect, useState } from "react";


const PokemonNames = ({ pokemon }) => {
  const [pokemonTypes, setPokemonTypes] = useState({});

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const pokemonId =
        pokemon.url.split("/")[pokemon.url.split("/").length - 2];
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      const response = await data.json();
      
      if (response) {
        setPokemonTypes(response);
      } else {
        console.error("Types not found in response:", response);
      }
    };

    fetchPokemonDetails();
  }, []);

  return (
    <div>
      <div>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
      <div>
        <PokemonTypes pokemonTypes={pokemonTypes} />
      </div>
    </div>
  );
};

export default PokemonNames;
