import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MediaItem } from "../../types";

export function CardButtonFavorite({
  mediaItem,
  isFavorite,
  onToggleFavorite,
}: {
  mediaItem: MediaItem;
  isFavorite: boolean;
  onToggleFavorite: (mediaItem: MediaItem) => void;
}) {
  return (
    <IconButton
      aria-label="add to favorites"
      color={isFavorite ? "error" : "default"}
      onClick={() => {
        onToggleFavorite(mediaItem);
      }}
    >
      <FavoriteIcon />
    </IconButton>
  );
}
