import Home from "./views/Home";
import PokemonDetails from "./views/PokemonDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonDetails />} />
      </Routes>
    </>
  );
};

export default App;
