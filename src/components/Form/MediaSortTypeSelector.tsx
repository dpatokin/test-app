import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Genre, Language, MediaSortType } from "../../types";

export default function MediaSortTypeSelector({
  mediaSortType,
  setMediaSortType,
  fetchGenres,
  genres,
  fetchLanguages,
  languages,
}: {
  mediaSortType: MediaSortType;
  setMediaSortType: (mediaSortType: MediaSortType) => void;
  fetchGenres: () => Promise<void>;
  genres: Genre[];
  fetchLanguages: () => Promise<void>;
  languages: Language[];
}) {
  const sortTypes: MediaSortType[] = [
    "random",
    "name",
    "year",
    "genre",
    "language",
    "rating",
  ];
  return (
    <FormControl sx={{ gridColumn: "4 / 7" }}>
      <InputLabel id="media-type-select-label">Search by...</InputLabel>
      <Select
        labelId="media-type-select-label"
        id="media-type-select"
        value={mediaSortType}
        label="Select by..."
        onChange={(e) => {
          setMediaSortType(e.target.value as MediaSortType);

          if (mediaSortType === "genre" && !genres.length) {
            fetchGenres();
          }

          if (mediaSortType === "language" && !languages.length) {
            fetchLanguages();
          }
        }}
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
