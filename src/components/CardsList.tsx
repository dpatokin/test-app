import { useState, useEffect, ReactElement, useCallback } from "react";
import {
  getFavoriteMediaArray,
  updateFavoriteMediaData,
} from "../utils/favoriteMedia";
import { MovieMediaItem, TVMediaItem } from "../types";
import { Grid } from "@mui/material";
import Card from "./Card/Card";
import CardsPlaceholder from "./CardsPlaceholder";

export default function CardsList({
  mediaData,
  loading,
}: {
  mediaData: (MovieMediaItem | TVMediaItem)[];
  loading?: boolean;
}): ReactElement {
  const [favoriteMedia, setFavoriteMedia] = useState<
    (MovieMediaItem | TVMediaItem)[]
  >([]);

  useEffect(() => {
    setFavoriteMedia(getFavoriteMediaArray());
  }, []);

  const handleToggleFavorite = useCallback(
    (mediaItem: MovieMediaItem | TVMediaItem) => {
      setFavoriteMedia((prev) =>
        prev.some((favoriteItem) => favoriteItem.id === mediaItem.id)
          ? prev.filter((filterItem) => filterItem.id !== mediaItem.id)
          : [...prev, mediaItem],
      );
      updateFavoriteMediaData(mediaItem);
    },
    [],
  );

  return (
    <Grid container spacing={2} mt={8}>
      {loading ? (
        <CardsPlaceholder />
      ) : (
        mediaData.map((mediaItem: MovieMediaItem | TVMediaItem) => (
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
