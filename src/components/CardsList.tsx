import { useState, useEffect, ReactElement } from "react";
import {
  getFavoriteMediaArray,
  updateFavoriteMediaData,
} from "../utils/favoriteMedia";
import { MediaItem } from "../types";
import { Grid } from "@mui/material";
import Card from "./Card/Card";
import CardsPlaceholder from "./CardsPlaceholder";

export default function CardsList({
  mediaData,
  loading,
}: {
  mediaData: MediaItem[];
  loading?: boolean;
}): ReactElement {
  const [favoriteMedia, setFavoriteMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    setFavoriteMedia(getFavoriteMediaArray());
  }, []);

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
      {loading ? (
        <CardsPlaceholder />
      ) : (
        mediaData.map((mediaItem: MediaItem) => (
          <Card
            key={mediaItem.id}
            mediaItem={mediaItem}
            favoriteMedia={favoriteMedia}
            onToggleFavorite={handleToggleFavorite}
          />
        ))
      )}
    </Grid>
  );
}
