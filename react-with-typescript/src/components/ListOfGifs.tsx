import React from "react";
import { ImageGifResponseFromApi } from "../types";
import "./ListOfGifs.css";

export const ListOfGifs = ({ gifs }: { gifs: ImageGifResponseFromApi[] }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map((gif, index) => (
        <a key={index} href={`#${index}`}>
          <img
            key={index}
            src={gif.url}
            width={100}
            height={100}
            alt={`img-${gif.url.substring(0, 6)}`}
          />
        </a>
      ))}
    </div>
  );
};
