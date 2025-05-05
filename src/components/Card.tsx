import Grid from "@mui/material/Grid";
import { MediaItem } from "../types";
import { ReactElement } from "react";
import {
  Box,
  Card as MUICard,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { CardButtonFavorite } from "./CardButtonFavorite.tsx";

export default function Card({
  mediaItem,
  favoriteMedia,
  onToggleFavorite,
}: {
  mediaItem: MediaItem;
  favoriteMedia: MediaItem[];
  onToggleFavorite: (mediaItem: MediaItem) => void;
}): ReactElement {
  const { id, release_date, poster_path: poster, title, overview } = mediaItem;
  const isFavorite = favoriteMedia.some(
    (favoriteItem) => favoriteItem.id === mediaItem.id,
  );
  const mediaBaseURL = "https://image.tmdb.org/t/p/w342/";
  const releaseDate = release_date
    ? new Date(release_date).getFullYear()
    : undefined;
  const movieURL = "https://www.themoviedb.org/movie/" + id;

  return (
    <Grid size={6} className="seriesCard">
      <MUICard
        className="seriesCard"
        sx={{ display: "flex", alignItems: "flex-start", height: "100%" }}
      >
        {poster && (
          <CardMedia
            component="img"
            width="240px"
            image={mediaBaseURL + poster}
            alt={title}
            sx={{ width: "240px" }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardHeader title={title} subheader={releaseDate} />
          <CardContent>
            <Typography
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 3,
              }}
            >
              {overview}
            </Typography>
          </CardContent>
          <CardActions
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
          </CardActions>
        </Box>
      </MUICard>
    </Grid>
  );
}
