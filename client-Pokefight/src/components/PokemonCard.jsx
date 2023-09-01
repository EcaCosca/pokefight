import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <div>
        <h1>{pokemon.name.english}</h1>
        {/* <img src={pokemon.image} alt={pokemon.name} /> */}
        <h2>Types</h2>
        <ul>
            {pokemon.type.map((type) => (
            <li>{type}</li>
            ))}
        </ul>
    </div>
  )
}

export default PokemonCard