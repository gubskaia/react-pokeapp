import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PokemonList.css"; // Импорт стилей

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
    }, []);

    return (
        <div className="pokemon-container">
            <h1 className="pokemon-title">Pokémons List</h1>
            <div className="pokemon-grid">
                {pokemons.map((pokemon, index) => (
                    <div className="pokemon-card">
                        <div className="pokemon-logo"></div>
                        <Link to={`/pokemon/${index + 1}`} className="pokemon-link">
                            {pokemon.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonsList;
