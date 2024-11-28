import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
    }, []);

    return (
        <div>
            <h1>Pokemons List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonsList;
