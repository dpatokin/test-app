import Grid from "@mui/material/Grid";
import { Genre, Language, MediaItem } from "../types";
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
  Stack,
  Chip,
} from "@mui/material";
import { CardButtonFavorite } from "./CardButtonFavorite.tsx";

export default function Card({
  mediaItem,
  favoriteMedia,
  onToggleFavorite,
  genresList,
  languagesList,
}: {
  mediaItem: MediaItem;
  favoriteMedia: MediaItem[];
  onToggleFavorite: (mediaItem: MediaItem) => void;
  genresList: Genre[];
  languagesList: Language[];
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
  const genres = genresList.filter((genre) => genre_ids.includes(genre.id));
  const originalLanguage = languagesList.find(
    (language) => language.iso_639_1 === original_language,
  );

  return (
    <Grid size={6} className="seriesCard">
      <MUICard
        className="seriesCard"
        sx={{ display: "flex", alignItems: "flex-start", height: "100%" }}
      >
        <CardMedia
          component="img"
          width="240px"
          height="100%"
          image={
            poster
              ? mediaBaseURL + poster
              : "https://placehold.co/240x360/222/fff?text=No+Image"
          }
          alt={title}
          sx={{ width: "240px" }}
        />
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
              Original language: {originalLanguage?.english_name}
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
              {genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
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
