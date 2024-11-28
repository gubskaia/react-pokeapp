import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PokemonPage.css";
import pokemonLogo from "/public/logo.png";
import axios from "axios";

const PokemonPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemon, setPokemon] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch pokemon details");
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [id]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <div>{error}</div>;

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
