import { Router } from "express";
import { getAllPokemon, getPokemonById } from "../controllers/pokeControllers.js";

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemon);
pokemonRouter.get("/:id", getPokemonById);
// pokemonRouter.get("/:id/:name", getPokemonInfo);

export default pokemonRouter;