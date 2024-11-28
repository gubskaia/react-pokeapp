import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import PokemonsList from "./pages/PokemonsList";
import PokemonPage from "./pages/PokemonPage";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<PokemonsList />} />
                <Route path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
