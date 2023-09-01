import React from 'react'
import PokemonCard from '../components/PokemonCard'

const Home = ({pokemons}) => {
  return (
    <div>
        <h1>Home</h1>

        {!pokemons ? <h2>Loading...</h2> :
            pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
        ))
        }
    </div>
  )
}

export default Home