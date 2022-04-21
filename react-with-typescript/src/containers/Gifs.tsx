import React, { useState } from "react";
import { ListOfGifs } from "../components/ListOfGifs";
import "./Gifs.css";
// Hooks -> funcionalidad para los componentes

export function Gifs() {
  const [keyword, setKeyword] = useState<string>("ecuador");

  return (
    <div className="Gif">
      <button onClick={() => setKeyword("panda")}>Cambiar Keyword</button>
      <ListOfGifs keyword={keyword} />
    </div>
  );
}
