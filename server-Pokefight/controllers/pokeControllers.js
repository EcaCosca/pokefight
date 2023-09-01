import Pokemon from "../pokedex.json" assert {type: "json"}

export const getAllPokemon = (req, res) => {
    res.send(Pokemon);
};

export const getPokemonById = (req, res) => {
    const {id} = req.params;

    const pokemon = Pokemon.find(p => p.id == id);

    res.send(pokemon);
};

// export const getPokemonInfo = (req, res) => {
//     res.send("getPokemonById");
// };