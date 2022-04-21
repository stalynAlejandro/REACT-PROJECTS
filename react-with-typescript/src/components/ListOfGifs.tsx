import React, { useEffect, useState } from "react";
import { ImageGifResponseFromApi } from "../types";
import { getGifs } from "../services/getGifs";

export const ListOfGifs = ({ keyword }: { keyword: string }) => {
  const [gifs, setGifs] = useState<ImageGifResponseFromApi[]>([]);

  useEffect(() => {
    getGifs({ keyword: keyword }).then((gifs: ImageGifResponseFromApi[]) =>
      setGifs(gifs)
    );
  }, [keyword]);

  return (
    <React.Fragment>
      {gifs.map((gif, index) => (
        <a href={`#${index}`}>
          <img
            key={index}
            src={gif.url}
            alt={`img-${gif.url.substring(0, 6)}`}
          />
        </a>
      ))}
    </React.Fragment>
  );
};
