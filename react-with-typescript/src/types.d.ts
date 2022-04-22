export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

// export interface SubsResponseFromApi {
//   nick: string;
//   months: number;
//   profileUrl: string;
//   description: string;
// }

export type SubsResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description: string;
}>;

// Gifs Api
export type ImageGifResponseFromApi = {
  id: string;
  url: string;
  size: string;
  width: string;
  height: string;
};

export type GifsResponseFromApi = {
  data: Array<{
    id: string;
    type: string;
    title: string;
    images: {
      original: ImageGifResponseFromApi;
      downsized_medium: ImageGifResponseFromApi;
    };
  }>;
};
