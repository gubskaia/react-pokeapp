import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [id]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                style={{ width: "150px", height: "150px" }}
            />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base experience: {pokemon.base_experience}</p>
            <Link to="/">Back to list</Link>
        </div>
    );
};

export default PokemonPage;
