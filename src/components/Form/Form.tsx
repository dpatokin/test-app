import { Box, Button } from "@mui/material";
import { useState } from "react";
import { MediaSortType } from "../../types";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import useFetchLanguages from "../../hooks/useFetchLanguages.ts";
import MediaSortTypeSelector from "./MediaSortTypeSelector.tsx";
import NameInput from "./NameInput.tsx";
import YearInput from "./YearInput.tsx";
import GenreSelect from "./GenreSelect.tsx";
import LanguageAutocomplete from "./LanguageAutocomplete.tsx";

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
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  const [mediaName, setMediaName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { fetchGenres, genres } = useFetchGenres();
  const { fetchLanguages, languages } = useFetchLanguages();

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
        fetchGenres={fetchGenres}
        genres={genres}
        fetchLanguages={fetchLanguages}
        languages={languages}
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
        <GenreSelect genres={genres} genre={genre} setGenre={setGenre} />
      )}
      {mediaSortType === "language" && (
        <LanguageAutocomplete languages={languages} setLanguage={setLanguage} />
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
