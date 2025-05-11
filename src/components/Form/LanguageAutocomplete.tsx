import { Autocomplete, Box, TextField } from "@mui/material";
import { Language } from "../../types";

export default function LanguageAutocomplete({
  languages,
  setLanguage,
  error,
  helperText,
}: {
  languages: Language[];
  setLanguage: (language: string) => void;
  error: boolean;
  helperText: string;
}) {
  const label = languages.length ? "Language" : "Loading...";

  return (
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
          label={label}
          disabled={!languages.length}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
