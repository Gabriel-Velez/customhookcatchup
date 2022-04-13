import { useEffect, useState } from "react";
import { getPokemon, getSelectedPokemon } from "./../services/PokeServices";

const usePokeState = (initalPokemon, initalSelectedPokemon) => {
  const [pokemen, setPokemen] = useState(initalPokemon);
  const [selectedPokemon, setSelectedPokemon] = useState(initalSelectedPokemon);

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

export default usePokeState;
