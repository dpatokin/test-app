import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Genre, Language } from "../types";

export interface GlobalDataContextType {
  genres: Genre[];
  languages: Language[];
}

const GlobalDataContext = createContext<GlobalDataContextType | undefined>(
  undefined,
);

export const GlobalDataProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguage] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedGenres = localStorage.getItem("genres");
      const storedLanguages = localStorage.getItem("languages");

      if (storedGenres && storedLanguages) {
        setGenres(JSON.parse(storedGenres || "[]"));
        setLanguage(JSON.parse(storedLanguages || "[]"));

        return;
      }

      try {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

        const [genresResponse, languagesResponse] = await Promise.all([
          fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
          ),
          fetch(`${BASE_URL}/configuration/languages?api_key=${API_KEY}`),
        ]);

        const genresResult = await genresResponse.json();
        const languagesResult = await languagesResponse.json();

        setGenres(genresResult.genres);
        setLanguage(languagesResult);

        localStorage.setItem("genres", JSON.stringify(genresResult.genres));
        localStorage.setItem("languages", JSON.stringify(languagesResult));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalDataContext.Provider value={{ genres, languages }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);

  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }

  return context;
};
