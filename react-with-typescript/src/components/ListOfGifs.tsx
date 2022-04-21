import React, { useEffect, useState } from "react";
import { ImageGifResponseFromApi } from "../types";
import { getGifs } from "../services/getGifs";
import { RouteComponentProps } from "wouter";

interface Props extends RouteComponentProps<{ keyword: string }> {}

export const ListOfGifs = (props: Props) => {
  const { keyword } = props.params;
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
            width={100}
            height={100}
            alt={`img-${gif.url.substring(0, 6)}`}
          />
        </a>
      ))}
    </React.Fragment>
  );
};
