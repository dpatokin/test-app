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

export type MediaSortType = "random" | "name" | "year" | "genre" | "language";

export interface FetchMediaFilters {
  mediaName?: string;
  year?: string;
  genre?: string;
  language?: string;
}

export interface FetchMediaParams {
  mediaSortType: MediaSortType;
  filters?: FetchMediaFilters;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}
