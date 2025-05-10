import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import useFetchGenres from "../../hooks/useFetchGenres.ts";

export default function GenreSelect({
  genre,
  setGenre,
}: {
  genre: string;
  setGenre: (genre: string) => void;
}) {
  const { fetchGenres, genres } = useFetchGenres();
  const label = genres.length ? "Genre" : "Loading...";

  // TODO: how to don't fetch genres every component mount
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <FormControl sx={{ gridColumn: "7 / 10" }}>
      <InputLabel id="media-genre-select-label">{label}</InputLabel>
      <Select
        labelId="media-genre-select-label"
        id="media-genre-select"
        value={genre}
        label={label}
        disabled={!genres.length}
        onChange={(e) => setGenre(e.target.value as string)}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
