import { Container, Typography } from "@mui/material";
import CardsList from "../components/CardsList.tsx";
import { getFavoriteMediaArray } from "../utils/favoriteMedia";
import { useEffect, useState } from "react";
import { MovieMediaItem, TVMediaItem } from "../types";

export default function Favorite() {
  const [favoriteMedia, setFavoriteMedia] = useState<
    (MovieMediaItem | TVMediaItem)[]
  >([]);

  useEffect(() => {
    setFavoriteMedia(getFavoriteMediaArray());
  }, []);

  return (
    <Container maxWidth="xl" sx={{ pt: 17, pb: 8 }}>
      <Typography variant="h1"> Favorite media</Typography>
      <CardsList mediaData={favoriteMedia} />
    </Container>
  );
}
