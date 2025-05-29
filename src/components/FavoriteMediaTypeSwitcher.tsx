import { Apps, LiveTvTwoTone, MovieCreationTwoTone } from "@mui/icons-material";
import { Box, Button, ButtonGroup } from "@mui/material";
import { MediaType } from "../types";

export default function FavoriteMediaTypeSwitcher({
  favoriteMediaType,
  setFavoriteMediaType,
}: {
  favoriteMediaType: MediaType | "all";
  setFavoriteMediaType: (favoriteMediaType: MediaType | "all") => void;
}) {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
    >
      <ButtonGroup sx={{ gridColumn: "4 / 10" }} size="large" fullWidth={true}>
        <Button
          variant={favoriteMediaType === "all" ? "contained" : "outlined"}
          startIcon={<Apps />}
          onClick={() => setFavoriteMediaType("all")}
        >
          All
        </Button>
        <Button
          variant={favoriteMediaType === "movie" ? "contained" : "outlined"}
          startIcon={<MovieCreationTwoTone />}
          onClick={() => setFavoriteMediaType("movie")}
        >
          Movies
        </Button>
        <Button
          variant={favoriteMediaType === "tv" ? "contained" : "outlined"}
          startIcon={<LiveTvTwoTone />}
          onClick={() => setFavoriteMediaType("tv")}
        >
          Series
        </Button>
      </ButtonGroup>
    </Box>
  );
}
