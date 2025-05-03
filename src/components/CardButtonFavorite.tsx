import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { toggleFavoriteMedia } from "../utils/favoriteMedia.ts";

export function CardButtonFavorite({ id }: { id: number }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <IconButton
      aria-label="add to favorites"
      color={isFavorite ? "error" : "default"}
      onClick={() => {
        const isFavorite = toggleFavoriteMedia(id);

        setIsFavorite(isFavorite);
      }}
    >
      <FavoriteIcon />
    </IconButton>
  );
}
