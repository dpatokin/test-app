import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FetchMediaParams, MediaSortType } from "../../types";
import MediaSortTypeSelector from "./MediaSortTypeSelector.tsx";
import NameInput from "./NameInput.tsx";
import YearInput from "./YearInput.tsx";
import GenreSelect from "./GenreSelect.tsx";
import LanguageAutocomplete from "./LanguageAutocomplete.tsx";

export function Form({
  fetchMedia,
}: {
  fetchMedia: (params: FetchMediaParams) => Promise<void>;
}) {
  const [mediaSortType, setMediaSortType] = useState<MediaSortType>("random");
  // TODO: reaplace all string states by one object
  const [mediaName, setMediaName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [errors, setErrors] = useState({
    mediaName: "",
    year: "",
    genre: "",
    language: "",
  });

  const validate = () => {
    const newErrors = { mediaName: "", year: "", genre: "", language: "" };

    if (mediaSortType === "name" && mediaName.trim() === "") {
      newErrors.mediaName = "Please enter a movie name";
    }
    if (
      mediaSortType === "year" &&
      (year.trim() === "" ||
        year.trim() < "1900" ||
        year.trim() > new Date().getFullYear().toString())
    ) {
      newErrors.year = "Please select a correct year";
    }
    if (mediaSortType === "genre" && !genre) {
      newErrors.genre = "Please select a genre";
    }
    if (mediaSortType === "language" && !language) {
      newErrors.language = "Please select a language";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        const filters = {
          mediaName,
          year,
          genre,
          language,
        };
        if (validate()) {
          fetchMedia({ mediaSortType, filters });
        }
      }}
    >
      <MediaSortTypeSelector
        mediaSortType={mediaSortType}
        setMediaSortType={setMediaSortType}
      />
      {mediaSortType === "name" && (
        <NameInput
          mediaName={mediaName}
          setMediaName={setMediaName}
          error={!!errors.mediaName}
          helperText={errors.mediaName}
        />
      )}
      {mediaSortType === "year" && (
        <YearInput setYear={setYear} helperText={errors.year} />
      )}
      {mediaSortType === "genre" && (
        <GenreSelect
          genre={genre}
          setGenre={setGenre}
          error={!!errors.genre}
          helperText={errors.genre}
        />
      )}
      {mediaSortType === "language" && (
        <LanguageAutocomplete
          setLanguage={setLanguage}
          error={!!errors.language}
          helperText={errors.language}
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
