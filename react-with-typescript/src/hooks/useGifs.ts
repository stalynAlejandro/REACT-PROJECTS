import React, { useEffect, useState } from "react";
import { ImageGifResponseFromApi } from "../types";
import { getGifs } from "../services/getGifs";

export function useGifs({ keyword }: { keyword?: string }) {
  const [gifs, setGifs] = useState<ImageGifResponseFromApi[]>([]);
  const [loadingGifs, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem("lastKeyword");
    console.log({ keywordToUse });
    getGifs({ keyword: keywordToUse as string }).then(
      (gifs: ImageGifResponseFromApi[]) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse as string);
      }
    );
  }, [keyword]);

  return {
    loadingGifs,
    gifs,
  };
}
