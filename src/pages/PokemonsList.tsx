import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/PokemonList.css'; // Импорт стилей

const PokemonsList: React.FC = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                setPokemons(response.data.results);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch pokemons");
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="pokemon-container">
            <h1 className="pokemon-title">Pokémons List</h1>
            <div className="pokemon-grid">
                {pokemons.map((pokemon, index) => (
                    <div className="pokemon-card" key={index}>
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
