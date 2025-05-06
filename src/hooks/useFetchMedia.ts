import { useState } from "react";
import { MediaItem, MediaSortType } from "../types";

// TODO: move function to separated type
export default function useFetchMedia(): {
  fetchMedia: (
    mediaSortType: MediaSortType,
    movieName: string,
    year: string,
    genre: string,
  ) => Promise<void>;
  mediaData: MediaItem[];
} {
  const [data, setData] = useState<MediaItem[]>([]);
  const fetchMedia = async (
    mediaSortType: MediaSortType,
    movieName: string,
    year: string,
    genre: string,
  ): Promise<void> => {
    const url = getURL(mediaSortType, movieName, year, genre);

    try {
      const response: Response = await fetch(url);
      const result = await response.json();

      console.log(result);

      setData(result.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchMedia, mediaData: data };
}

function getURL(
  mediaSortType: MediaSortType,
  movieName: string,
  year: string,
  genre: string,
): string {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  let url: string = "";

  switch (mediaSortType) {
    case "random": {
      const pageNumber = Math.floor(Math.random() * 501);
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNumber}`;
      break;
    }
    case "name":
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`;
      break;
    case "year":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${year}`;
      break;
    case "genre":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
      break;
  }

  return url;
}
