import React, { useContext } from "react";
import { GifsContext } from "../context/GifsContext";
import { Gif } from "../components/Gif";

export function Detail({ params }: any) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((gif) => gif.id === params.id);

  return gif ? <Gif index={+gif.id} gif={gif} /> : <></>;
}
