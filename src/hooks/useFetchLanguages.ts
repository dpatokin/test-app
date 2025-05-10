import { Language } from "../types";
import { useState } from "react";

export default function useFetchLanguages() {
  const [languages, setLanguages] = useState<Language[]>([]);

  const fetchLanguages = async (): Promise<void> => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
    const url = `${BASE_URL}/configuration/countries?api_key=${API_KEY}&language=en-US`;

    try {
      const response: Response = await fetch(url);
      const result = await response.json();

      setLanguages(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchLanguages, languages };
}
