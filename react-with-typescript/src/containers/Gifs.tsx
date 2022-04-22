import React, { useState } from "react";
import { Link, Route, useLocation } from "wouter";
import App from "../App";
import { SearchResults } from "../components";
import { ListOfGifs } from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";
import "./Gifs.css";
// Hooks -> funcionalidad para los componentes

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export function Gifs() {
  const [keyword, setKeyword] = useState<string>("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here ..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <input type="submit" value="Buscar" />
      </form>
      <h3>Última búsquedad</h3>
      <ListOfGifs gifs={gifs} />
      <div className="Gif">
        {POPULAR_GIFS.map((popularGif) => (
          <Link to={`/gif/${popularGif}`}>Gifs {popularGif}</Link>
        ))}
        <Route component={App} path="/" />
        <Route component={SearchResults} path="/gif/:keyword" />
      </div>
    </>
  );
}
