import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokemonDetails from "./PokemonDetails";
import PokemonNames from "./PokemonNames";

const PokemonCard = ({ currentPage, pokemonPerPage }) => {
  const navigate = useNavigate();
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetailsIndex, setPokemonDetailsIndex] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }
        const data = await response.json();

        setPokemons(data.results);

        let pokemonDetailsIndexArr = [];
        for (let i = 1; i <= data.results.length; i++) {
          pokemonDetailsIndexArr.push(i);
        }
        setPokemonDetailsIndex(pokemonDetailsIndexArr);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  //   useEffect(() => {
  //     const fetchPokemonDetails = async () => {
  //       const typesMap = {};
  //       for (let pokemon of pokemons) {
  //         const pokemonId =
  //           pokemon.url.split("/")[pokemon.url.split("/").length - 2];
  //         const data = await fetch(
  //           `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  //         );
  //         const response = await data.json();
  //         if (response) {
  //           typesMap[pokemon.name] = response.types;
  //         } else {
  //           console.error("Types not found in response:", response);
  //         }
  //       }
  //       setPokemonTypes(typesMap);
  //     };

  //     fetchPokemonDetails();
  //   }, [pokemons]);

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Home
      </button>
      <div>
        {pokemons.map((pokemon, index) => {
          const pokemonId =
            pokemon.url.split("/")[pokemon.url.split("/").length - 2];
          return (
            <div key={pokemon.name}>
              <span style={{ display: "inline-flex", alignItems: "center" }}>
                <strong>
                  {(currentPageState - 1) * pokemonPerPage + index + 1}.
                  {"\u00A0"}
                </strong>
                <strong>
                  <PokemonNames pokemon={pokemon} />
                </strong>
              </span>
              <PokemonDetails pokemonId={pokemonId} pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
