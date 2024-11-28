import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PokemonPage.css";
import pokemonLogo from "/public/logo.png";  // Убедитесь, что путь к лого правильный

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [id]);

    if (!pokemon) return <p className="loading">Loading...</p>;

    return (
        <div className="pokemon-page">
            <h1 className="pokemon-title">Pokémon Details</h1>
            <div className="pokemon-details-card">
                <img
                    src={pokemonLogo}
                    alt="Pokemon Logo"
                    className="pokemon-logo"
                />
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-image"
                />
                <div className="pokemon-name">{pokemon.name}</div>
                <div className="pokemon-stats">
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Base experience: {pokemon.base_experience}</p>
                </div>
            </div>
            <Link to="/" className="back-button">Back to list</Link>
        </div>
    );
};

export default PokemonPage;
