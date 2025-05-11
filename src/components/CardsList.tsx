import { useState, useEffect, ReactElement } from "react";
import {
  getFavoriteMediaArray,
  updateFavoriteMediaData,
} from "../utils/favoriteMedia";
import { MediaItem } from "../types";
import { Grid } from "@mui/material";
import Card from "./Card.tsx";
import useFetchGenres from "../hooks/useFetchGenres.ts";
import useFetchLanguages from "../hooks/useFetchLanguages.ts";

export default function CardsList({
  mediaData,
}: {
  mediaData: MediaItem[];
}): ReactElement {
  const [favoriteMedia, setFavoriteMedia] = useState<MediaItem[]>([]);
  const { fetchGenres, genres } = useFetchGenres();
  const { fetchLanguages, languages } = useFetchLanguages();

  useEffect(() => {
    setFavoriteMedia(getFavoriteMediaArray());
    fetchGenres();
    fetchLanguages();
  }, []);

  console.log(languages);

  const handleToggleFavorite = (mediaItem: MediaItem) => {
    setFavoriteMedia((prev) =>
      prev.some((favoriteItem) => favoriteItem.id === mediaItem.id)
        ? prev.filter((filterItem) => filterItem.id !== mediaItem.id)
        : [...prev, mediaItem],
    );
    updateFavoriteMediaData(mediaItem);
  };

  return (
    <Grid container spacing={2} mt={8}>
      {mediaData.map((mediaItem: MediaItem) => (
        <Card
          key={mediaItem.id}
          mediaItem={mediaItem}
          favoriteMedia={favoriteMedia}
          onToggleFavorite={handleToggleFavorite}
          genresList={genres}
          languagesList={languages}
        />
      ))}
    </Grid>
  );
}
