import React, { useState } from "react";
import { ImageGifResponseFromApi } from "../types";

type GifsContextType = {
  gifs: ImageGifResponseFromApi[];
  setGifs?: (image: ImageGifResponseFromApi[]) => void;
};

export const GifsContext = React.createContext<GifsContextType>({
  gifs: [],
});

// Tener un propio provider
export function GifContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [gifs, setGifs] = useState<ImageGifResponseFromApi[]>([]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}
