import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MediaSortType } from "../../types";

export default function MediaSortTypeSelector({
  mediaSortType,
  setMediaSortType,
}: {
  mediaSortType: MediaSortType;
  setMediaSortType: (mediaSortType: MediaSortType) => void;
}) {
  const sortTypes: MediaSortType[] = [
    "random",
    "name",
    "year",
    "genre",
    "language",
  ];

  return (
    <FormControl
      sx={{ gridColumn: mediaSortType === "random" ? "4 / 10" : "4 / 7" }}
    >
      <InputLabel id="media-type-select-label">Search by...</InputLabel>
      <Select
        labelId="media-type-select-label"
        id="media-type-select"
        value={mediaSortType}
        label="Select by..."
        onChange={(e) => setMediaSortType(e.target.value)}
      >
        {sortTypes.map((type, i) => (
          <MenuItem key={i} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
