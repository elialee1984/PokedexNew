import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokemonNames from "./PokemonNames";

const PokemonCard = ({ currentPage, pokemonPerPage }) => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }
        const data = await response.json();

        setPokemons(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Home
      </button>
      <div>
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.name}>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <strong>
                {(currentPageState - 1) * pokemonPerPage + index + 1}.
              </strong>
              {"\u00A0"}
            </span>
              <PokemonNames pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
