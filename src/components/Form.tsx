import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { MediaSortType } from "../types";
import { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";
import UseFetchGenres from "../hooks/UseFetchGenres";
import CircularProgress from "@mui/material/CircularProgress";

export function Form({
  fetchMedia,
}: {
  fetchMedia: (
    mediaSortType: MediaSortType,
    mediaName: string,
    year: string,
    genre: string,
  ) => Promise<void>;
}) {
  // TODO: Add useReducer?
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  const [mediaName, setMediaName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const { fetchGenres, genres } = UseFetchGenres();
  const [genre, setGenre] = useState<string>("");

  useEffect(() => {
    // TODO: cache this using something instead of if statement
    if (mediaSortType === "genre" && !genres.length) {
      fetchGenres();
    }
  }, [genres.length, mediaSortType, fetchGenres]);

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        fetchMedia(mediaSortType, mediaName, year, genre);
      }}
    >
      <FormControl sx={{ gridColumn: "4 / 7" }}>
        <InputLabel id="media-type-select-label">Search by...</InputLabel>
        <Select
          labelId="media-type-select-label"
          id="media-type-select"
          value={mediaSortType}
          label="Select by..."
          onChange={(e) => setMediaSortType(e.target.value as MediaSortType)}
        >
          <MenuItem value="random">Random</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="year">Year</MenuItem>
          <MenuItem value="genre">Genre</MenuItem>
        </Select>
      </FormControl>
      {(mediaSortType === "random" || mediaSortType === "name") && (
        <FormControl sx={{ gridColumn: "7 / 10" }}>
          <TextField
            id="media-name-input"
            label="Movie name"
            value={mediaName}
            disabled={mediaSortType !== "name"}
            onChange={(e) => setMediaName(e.target.value)}
          />
        </FormControl>
      )}
      {mediaSortType === "year" && (
        <FormControl sx={{ gridColumn: "7 / 10" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Year"
              views={["year"]}
              openTo="year"
              maxDate={dayjs()}
              onChange={(value: PickerValue) =>
                setYear(value ? value.format("YYYY") : "")
              }
            />
          </LocalizationProvider>
        </FormControl>
      )}
      {mediaSortType === "genre" && (
        <FormControl sx={{ gridColumn: "7 / 10" }}>
          <InputLabel id="media-genre-select-label">
            {genres.length ? "Genre" : "Loading..."}
          </InputLabel>
          <Select
            labelId="media-genre-select-label"
            id="media-genre-select"
            value={genre}
            label={genres.length ? "Genre" : "Loading..."}
            disabled={!genres.length}
            onChange={(e) => setGenre(e.target.value as string)}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
          {!genres.length && (
            <CircularProgress
              sx={{
                position: "absolute",
                top: "calc(50% - 15px)",
                left: "calc(50% - 15px)",
              }}
              size={30}
            />
          )}
        </FormControl>
      )}
      <Button
        type="submit"
        variant="outlined"
        size="large"
        sx={{ gridColumn: "4 / 10" }}
      >
        Get media
      </Button>
    </Box>
  );
}
