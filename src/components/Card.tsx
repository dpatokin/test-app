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
import Grid from "@mui/material/Grid";
import { MediaItem } from "../types";
import { ReactElement } from "react";
import { CardButtonFavorite } from "./CardButtonFavorite.tsx";
import { useGlobalData } from "../hooks/useGlobalData.tsx";
import UserScorePieChar from "./Card/UserScorePieChart.tsx";

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
    vote_average,
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
  const { genres: genresList, languages: languagesList } = useGlobalData();
  const genres = genresList.filter((genre) => genre_ids.includes(genre.id));
  const originalLanguage = languagesList.find(
    (language) => language.iso_639_1 === original_language,
  );
  const userScore = Math.round(vote_average * 10);

  // TODO: split Card into components
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
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              textAlign="start"
              spacing={2}
              sx={{ mt: 1.5 }}
            >
              <Box>
                <Typography variant="body2" sx={{ color: "text.disabled" }}>
                  Release date: {releaseDate}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.disabled" }}>
                  Original language: {originalLanguage?.english_name}
                </Typography>
              </Box>
              {adult && (
                <Typography variant="body2" sx={{ color: "text.disabled" }}>
                  For adults
                </Typography>
              )}
              <UserScorePieChar userScore={userScore} />
            </Stack>
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
