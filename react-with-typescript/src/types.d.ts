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
  height: string;
  width: string;
  size: string;
  url: string;
};

export type GifsResponseFromApi = {
  data: Array<{
    type: string;
    title: string;
    images: {
      original: ImageGifResponseFromApi;
      downsized_medium: ImageGifResponseFromApi;
    };
  }>;
};
