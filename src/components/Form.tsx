import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { MediaSortType } from "../types";

export function Form({
  fetchMedia,
}: {
  fetchMedia: (
    mediaSortType: MediaSortType,
    mediaName: string,
  ) => Promise<void>;
}) {
  // TODO: Add useReducer?
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  const [mediaName, setMediaName] = useState<string>("");

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        fetchMedia(mediaSortType, mediaName);
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
        </Select>
      </FormControl>
      <FormControl sx={{ gridColumn: "7 / 10" }}>
        <TextField
          id="media-name-input"
          label="Movie name"
          value={mediaName}
          disabled={mediaSortType !== "name"}
          onChange={(e) => setMediaName(e.target.value)}
        />
      </FormControl>
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
