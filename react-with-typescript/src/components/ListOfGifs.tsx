import React, { useEffect, useState } from "react";
import { ImageGifResponseFromApi } from "../types";
import { getGifs } from "../services/getGifs";
import { RouteComponentProps } from "wouter";

interface Props extends RouteComponentProps<{ keyword: string }> {}

export const ListOfGifs = (props: Props) => {
  const { keyword } = props.params;
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<ImageGifResponseFromApi[]>([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keyword }).then((gifs: ImageGifResponseFromApi[]) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return (
    <React.Fragment>
      {loading && <i>Loading ...</i>}
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
