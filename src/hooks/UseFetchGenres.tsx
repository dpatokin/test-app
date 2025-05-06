import { Genre } from "../types";
import { useState } from "react";

export default function UseFetchGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);

  const fetchGenres = async (): Promise<void> => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

    try {
      const response: Response = await fetch(url);
      const result = await response.json();

      setGenres(result.genres);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchGenres, genres };
}
