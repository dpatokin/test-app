import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useGlobalData } from "../../hooks/useGlobalData";

export default function GenreSelect({
  genre,
  setGenre,
  error,
  helperText,
}: {
  genre: string;
  setGenre: (genre: string) => void;
  error: boolean;
  helperText: string;
}) {
  const { genres } = useGlobalData();
  const label = "Genre";

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
