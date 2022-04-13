import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from "./components/PokeList";
import SelectedPoke from "./components/SelectedPoke";

import { getPokemon, getSelectedPokemon } from "./services/PokeServices";

function App() {
  const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
      setPokemen(getPokemon());
    }, []);
    const handlePoke = (id) => {
      getSelectedPokemon(id)
        .then((data) => {
          setSelectedPokemon(data);
        })
        .catch((err) => console.error(err));
    };

    return [selectedPokemon, handlePoke, pokemen];
  };

  const [selectedPokemon, handlePoke, pokemen] = usePokeState();

  return (
    <div className='App'>
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
