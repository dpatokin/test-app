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
  const {
    id,
    release_date,
    poster_path: poster,
    title,
    overview,
    original_language,
    original_title,
    adult,
    genre_ids,
  } = mediaItem;
  const originalTitle =
    original_title && original_language !== "en" ? original_title : undefined;
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
          <CardHeader title={title} subheader={originalTitle} />
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
            <Typography
              variant="body2"
              sx={{ mt: 1.5, color: "text.disabled" }}
            >
              Release date: {releaseDate}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Original language: {original_language}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Genres: {genre_ids}
            </Typography>
            {adult && (
              <Typography variant="body2" sx={{ color: "text.disabled" }}>
                For adults
              </Typography>
            )}
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
