import React, { useEffect, useState } from "react";
import { ImageGifResponseFromApi } from "../types";
import { getGifs } from "../services/getGifs";

export default function useGifs({ keyword }: { keyword: string }) {
  const [gifs, setGifs] = useState<ImageGifResponseFromApi[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keyword }).then((gifs: ImageGifResponseFromApi[]) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return {
    loading,
    gifs,
  };
}
