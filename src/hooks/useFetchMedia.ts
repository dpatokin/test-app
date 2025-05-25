import { useMemo, useState } from "react";
import {
  FetchMediaFilters,
  FetchMediaParams,
  MediaItem,
  MediaSortType,
} from "../types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export default function useFetchMedia(): {
  fetchMedia: (params: FetchMediaParams) => Promise<void>;
  mediaData: MediaItem[];
} {
  const [data, setData] = useState<MediaItem[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  async function fetchTotalPages(url: string): Promise<number> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return 0;
      }
      const result = await response.json();

      setTotalPages(result.total_pages);

      return result.total_pages;
    } catch (error) {
      console.error("Error fetching total pages:", error);
      return 0;
    }
  }

  const fetchMedia = async ({
    mediaSortType,
    filters,
  }: FetchMediaParams): Promise<void> => {
    let url = useMemo(
      () => getURL(mediaSortType, filters),
      [mediaSortType, filters],
    );
    let total = totalPages || (await fetchTotalPages(url));
    total = total > 500 ? 500 : total; // There is an API bug if you try to set page number more than 500

    if (total > 0) {
      const pageNumber = Math.floor(Math.random() * total) + 1;

      url += `&page=${pageNumber}`;
    }

    try {
      const response: Response = await fetch(url);

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }

      const result = await response.json();

      setData(result.results || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchMedia, mediaData: data };
}

function getURL(
  mediaSortType: MediaSortType,
  filters?: FetchMediaFilters,
): string {
  let url: string = "";

  switch (mediaSortType) {
    case "random": {
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
      break;
    }
    case "name":
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${filters?.mediaName}`;
      break;
    case "year":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${filters?.year}`;
      break;
    case "genre":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${filters?.genre}`;
      break;
    case "language":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${filters?.language}`;
      break;
  }

  return url;
}
