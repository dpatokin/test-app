import { useState } from "react";
import { MediaItem } from "../types";

export function useFetchData() {
  const [fetchedData, setFetchedData] = useState<MediaItem[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const pageNumber: number = Math.floor(Math.random() * 501);
      const apiKey: string = "e8e89de3a95e7f0c804df47cfb465c36";
      const response: Response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`,
      );
      const result = await response.json();

      setFetchedData(result.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchedData, fetchData };
}
