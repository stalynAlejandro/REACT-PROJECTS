import React, { useState } from "react";
import App from "../App";
import { Link, Route, useLocation } from "wouter";
import { useGifs } from "../hooks/useGifs";
import { SearchResults } from "../components";
import { Loading } from "../components/Loading";
import { ListOfGifs } from "../components/ListOfGifs";
import { StaticContext } from "../context/StaticContext";
import { GifContextProvider } from "../context/GifsContext";
import { Detail } from "./Detail";

import "./Gifs.css";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export function Gifs() {
  const [keyword, setKeyword] = useState<string>("");
  const [path, pushLocation] = useLocation();
  const { loadingGifs, gifs } = useGifs({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <StaticContext.Provider value={{ name: "init", subsAlCanal: false }}>
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
      {loadingGifs ? <Loading /> : <ListOfGifs gifs={gifs} />}

      <div className="Gif">
        {POPULAR_GIFS.map((popularGif) => (
          <Link to={`/gif/${popularGif}`}>Gifs {popularGif}</Link>
        ))}
        <GifContextProvider>
          <Route component={App} path="/" />
          <Route component={SearchResults} path="/gif/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifContextProvider>
      </div>
    </StaticContext.Provider>
  );
}
