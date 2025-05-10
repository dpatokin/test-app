import { Box, Button, TextField, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import { MediaSortType } from "../../types";
import useFetchLanguages from "../../hooks/useFetchLanguages.ts";
import MediaSortTypeSelector from "./MediaSortTypeSelector.tsx";
import NameInput from "./NameInput.tsx";
import YearInput from "./YearInput.tsx";
import GenreSelect from "./GenreSelect.tsx";

export function Form({
  fetchMedia,
}: {
  fetchMedia: (
    mediaSortType: MediaSortType,
    mediaName: string,
    year: string,
    genre: string,
    language: string,
  ) => Promise<void>;
}) {
  // TODO: Add useReducer?
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  const [mediaName, setMediaName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { fetchLanguages, languages } = useFetchLanguages();

  // TODO: cache this using something instead of if statement
  useEffect(() => {
    if (mediaSortType === "language" && !languages.length) {
      fetchLanguages();
    }
  }, [languages.length, mediaSortType, fetchLanguages]);

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        fetchMedia(mediaSortType, mediaName, year, genre, language);
      }}
    >
      <MediaSortTypeSelector
        mediaSortType={mediaSortType}
        setMediaSortType={setMediaSortType}
      />
      {(mediaSortType === "random" || mediaSortType === "name") && (
        <NameInput
          mediaName={mediaName}
          setMediaName={setMediaName}
          disabled={mediaSortType !== "name"}
        />
      )}
      {mediaSortType === "year" && <YearInput setYear={setYear} />}
      {mediaSortType === "genre" && (
        <GenreSelect genre={genre} setGenre={setGenre} />
      )}
      {mediaSortType === "language" && (
        <Autocomplete
          sx={{ gridColumn: "7 / 10" }}
          id="media-language-autocomplete"
          options={languages}
          getOptionLabel={(option) => option.english_name}
          onChange={(_, newValue) =>
            setLanguage(newValue ? newValue.iso_3166_1.toLowerCase() : "")
          }
          renderOption={(props, option) => (
            <Box
              component="li"
              {...props}
              key={option.iso_3166_1}
              sx={{
                "& > img": {
                  mr: 2,
                  flexShrink: 0,
                  display: "inline-block",
                  width: 20,
                },
              }}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.iso_3166_1.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.iso_3166_1.toLowerCase()}.png`}
                alt=""
              />
              {option.english_name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={languages.length ? "Language" : "Loading..."}
              disabled={!languages.length}
            />
          )}
        />
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
