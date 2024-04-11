import Home from "./views/Home";
import PokemonDetails from "./views/PokemonDetails";
import { Routes, Route } from "react-router-dom";
import "./style.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
};

export default App;
