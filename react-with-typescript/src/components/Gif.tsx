import React from "react";
import { Link } from "wouter";
import { ImageGifResponseFromApi } from "../types";

export function Gif({
  index,
  gif,
}: {
  index: number;
  gif: ImageGifResponseFromApi;
}) {
  return (
    <div className="Gif">
      <Link to={`/gif/${gif.id}`}>
        <img
          key={index}
          src={gif.url}
          width={100}
          height={100}
          alt={`img-${gif.url.substring(0, 6)}`}
        />
      </Link>
    </div>
  );
}
