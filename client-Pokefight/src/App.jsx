import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import SinglePokemon from './pages/SinglePokemon'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons();
  }, [])

  
  const getPokemons = () => {
    axios.get("http://localhost:8888/pokemon").then((res) => {
    console.log(res.data);
    setPokemons(res.data);
    })
    .catch((err) => {
    console.log(err);})
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon/1">First pokemon</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon/1/base">First Pokemon base</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons}/>} />
        <Route path="/pokemon/:id" element={<SinglePokemon/>} />
        <Route path="/pokemon/:id/:info" element={<h1>Id and info</h1>} />
      </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
