import React from "react";
import { ImageGifResponseFromApi } from "../types";
import { Gif } from "./Gif";
import "./ListOfGifs.css";

export const ListOfGifs = ({ gifs }: { gifs: ImageGifResponseFromApi[] }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map((gif, index) => (
        <Gif index={index} gif={gif} />
      ))}
    </div>
  );
};
