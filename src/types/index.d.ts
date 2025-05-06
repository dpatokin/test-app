export interface MediaItem {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MediaSortType =
  | "random"
  | "name"
  | "year"
  | "genre"
  | "language"
  | "rating";

export interface Genre {
  id: number;
  name: string;
}

export interface Language {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}
