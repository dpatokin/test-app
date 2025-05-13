import { CardActions as MUICardActions, Button } from "@mui/material";
import { CardButtonFavorite } from "./CardButtonFavorite";
import { MediaItem } from "../../types";

export default function CardActions({
  mediaItem,
  favoriteMedia,
  onToggleFavorite,
}: {
  mediaItem: MediaItem;
  favoriteMedia: MediaItem[];
  onToggleFavorite: (mediaItem: MediaItem) => void;
}) {
  const { id } = mediaItem;
  const movieURL = "https://www.themoviedb.org/movie/" + id;
  const isFavorite = favoriteMedia.some(
    (favoriteItem) => favoriteItem.id === mediaItem.id,
  );

  return (
    <MUICardActions
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Button size="small" href={movieURL} target="_blank">
        Learn More
      </Button>
      <CardButtonFavorite
        mediaItem={mediaItem}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </MUICardActions>
  );
}
