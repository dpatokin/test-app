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
import { useState } from "react";
import { MediaSortType } from "../types";
import { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";

export function Form({
  fetchMedia,
}: {
  fetchMedia: (
    mediaSortType: MediaSortType,
    mediaName: string,
    year: string,
  ) => Promise<void>;
}) {
  // TODO: Add useReducer?
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  const [mediaName, setMediaName] = useState<string>("");
  const [year, setYear] = useState<string>("");

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        fetchMedia(mediaSortType, mediaName, year);
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
