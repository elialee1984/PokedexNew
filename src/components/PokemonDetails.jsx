import React, { useEffect, useState } from "react";

const PokemonDetails = ({ pokemonId }) => {
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      const response = await data.json();
      console.log(response)
      if (response) {
        setTypeOne(
          response.types[0].type.name[0].toUpperCase() +
            response.types[0].type.name.slice(1)
        );
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

export default PokemonDetails;
