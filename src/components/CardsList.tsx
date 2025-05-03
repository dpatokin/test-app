import { useState, useEffect, ReactElement } from "react";
import {
  getFavoriteMediaArray,
  updateFavoriteMediaData,
} from "../utils/favoriteMedia";
import { Item } from "../types";
import { Grid } from "@mui/material";
import Card from "./Card.tsx";

export default function CardsList({
  fetchedData,
}: {
  fetchedData: Item[];
}): ReactElement {
  const [favoriteMedia, setFavoriteMedia] = useState<number[]>([]);

  useEffect(() => {
    setFavoriteMedia(getFavoriteMediaArray());
  }, []);

  const handleToggleFavorite = (id: number) => {
    setFavoriteMedia((prev) =>
      prev.includes(id)
        ? prev.filter((filterID) => filterID !== id)
        : [...prev, id],
    );
    updateFavoriteMediaData(id);
  };

  return (
    <Grid container spacing={2} mt={8}>
      {fetchedData.map((item: Item) => (
        <Card
          key={item.id}
          {...item}
          favoriteMedia={favoriteMedia}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </Grid>
  );
}
