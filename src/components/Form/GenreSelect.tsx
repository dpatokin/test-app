import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Genre } from "../../types";

export default function GenreSelect({
  genres,
  genre,
  setGenre,
  error,
  helperText,
}: {
  genres: Genre[];
  genre: string;
  setGenre: (genre: string) => void;
  error: boolean;
  helperText: string;
}) {
  const label = genres.length ? "Genre" : "Loading...";

  return (
    <FormControl sx={{ gridColumn: "7 / 10" }} error={error}>
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
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
