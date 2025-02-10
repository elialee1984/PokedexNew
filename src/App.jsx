import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 20;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route
          path="/pokemonList"
          element={
            <PokemonCard
              currentPage={currentPage}
              pokemonPerPage={pokemonPerPage}
            />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
