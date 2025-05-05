import { useState } from "react";
import { MediaItem, MediaSortType } from "../types";

// TODO: move function to separated type
export default function useFetchMedia(): {
  fetchMedia: (
    mediaSortType: MediaSortType,
    movieName: string,
  ) => Promise<void>;
  mediaData: MediaItem[];
} {
  const [data, setData] = useState<MediaItem[]>([]);
  const fetchMedia = async (
    mediaSortType: MediaSortType,
    movieName: string,
  ): Promise<void> => {
    const url = getURL(mediaSortType, movieName);

    try {
      const response: Response = await fetch(url);
      const result = await response.json();

      setData(result.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return { fetchMedia, mediaData: data };
}

function getURL(mediaSortType: MediaSortType, movieName: string): string {
  const API_KEY = "e8e89de3a95e7f0c804df47cfb465c36";
  const BASE_URL = "https://api.themoviedb.org/3";
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
  }

  return url;
}
