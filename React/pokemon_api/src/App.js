import './App.css';
import react, {useState, useEffect} from 'react';
import Poke from './components/Poke';



function App() {
  const [pokemon, setPokemon] = useState([]);
  return (
    <div className="App">
      <Poke pokemon = {pokemon} setPokemon= {setPokemon} />
    </div>
  );
}

export default App;
