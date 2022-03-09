import './App.styles.css';
import PokemonCard from './components/PokemonCard/PokemonCard'
import { POKEMONS } from './shared/data.js'

const pokemons = POKEMONS

function App() {

  const CardList = pokemons.map((elem, id) => {
    return (
      <PokemonCard key={id} pokemon={elem}/>
    )
  })


  return (
    <div className="list">
      {CardList}
    </div>
  )
}

export default App;
