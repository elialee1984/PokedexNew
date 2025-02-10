import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      MainPage
      <div>
        <button type="click" onClick={() => navigate("/pokemonList")}>
          Complete Pokemon List
        </button>
      </div>
    </div>
  );
};

export default MainPage;
