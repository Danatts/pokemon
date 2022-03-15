import PokemonCard from "../PokemonCard/PokemonCard"
import Test from "../Test/Test"
import { POKEMONS as pokemons} from '../../shared/data.js'
import './CardsList.styles.css'

function CardsList(){

  return(
    <div className="list">
      {
        pokemons.map((item, id) => {
          return(
            <PokemonCard key={id} pokemon={item} />
          )
        })
      }
    </div>
  )
}

export default CardsList
