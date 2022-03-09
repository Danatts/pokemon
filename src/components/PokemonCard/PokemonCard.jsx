import './PokemonCard.styles.css'

function PokemonCard(props){

  console.log(props.pokemon.name)

  return(
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <h2 className="card__title">{props.pokemon.name.toUpperCase()}</h2>
          <p className="card__subtitle">Weight: {props.pokemon.weight}</p>
        </div>
        <div className="card__figure">
          <img className="card__image" src={props.pokemon.image} />
        </div>
        <div className="card__body">
          <div className="card__stats">
            <div className="card__value">
              <p><strong>Attack:</strong></p>
              <p>{props.pokemon.stats[1].base_stat}</p>
            </div>
            <div className="card__value">
              <p><strong>Defense:</strong></p>
              <p>{props.pokemon.stats[2].base_stat}</p>
            </div>
            <div className="card__value">
              <p><strong>Precil Attack:</strong></p>
              <p>{props.pokemon.stats[3].base_stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;
