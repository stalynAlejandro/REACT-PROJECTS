import { GifsResponseFromApi, ImageGifResponseFromApi } from "../types";

const apiKey = "dbnOzvHgN11KjZGGpQGa9IPADQ1Ixz3R";

export const getGifs = ({
  keyword = "morty",
}: {
  keyword?: string;
}): Promise<ImageGifResponseFromApi[]> => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] }: GifsResponseFromApi = response;
      const gifs = data.map((gif) => {
        console.log(gif);
        return {
          id: gif.id,
          url: gif.images.downsized_medium.url,
          size: gif.images.downsized_medium.size,
          width: gif.images.downsized_medium.width,
          height: gif.images.downsized_medium.height,
        };
      });
      return gifs as ImageGifResponseFromApi[];
    });
};
