import { Box, Card as MUICard } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MediaItem } from "../../types";
import { ReactElement } from "react";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";
import CardActions from "./CardActions";
import CardTitle from "./CardTitle";

export default function Card({
  mediaItem,
  favoriteMedia,
  onToggleFavorite,
}: {
  mediaItem: MediaItem;
  favoriteMedia: MediaItem[];
  onToggleFavorite: (mediaItem: MediaItem) => void;
}): ReactElement {
  return (
    <Grid size={6} className="seriesCard">
      <MUICard
        className="seriesCard"
        sx={{ display: "flex", alignItems: "flex-start", height: "100%" }}
      >
        <CardMedia {...mediaItem} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardTitle {...mediaItem} />
          <CardContent {...mediaItem} />
          <CardActions
            mediaItem={mediaItem}
            favoriteMedia={favoriteMedia}
            onToggleFavorite={onToggleFavorite}
          />
        </Box>
      </MUICard>
    </Grid>
  );
}
