import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function CardButtonFavorite({
  id,
  isFavorite,
  onToggleFavorite,
}: {
  id: number;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}) {
  return (
    <IconButton
      aria-label="add to favorites"
      color={isFavorite ? "error" : "default"}
      onClick={() => {
        onToggleFavorite(id);
      }}
    >
      <FavoriteIcon />
    </IconButton>
  );
}
