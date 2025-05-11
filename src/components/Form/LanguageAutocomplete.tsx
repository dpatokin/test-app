import { Autocomplete, Box, TextField } from "@mui/material";
import { useGlobalData } from "../../context/GlobalDataContext.tsx";

export default function LanguageAutocomplete({
  setLanguage,
  error,
  helperText,
}: {
  setLanguage: (language: string) => void;
  error: boolean;
  helperText: string;
}) {
  const { languages } = useGlobalData();

  return (
    <Autocomplete
      sx={{ gridColumn: "7 / 10" }}
      id="media-language-autocomplete"
      options={languages}
      getOptionLabel={(option) => option.english_name}
      onChange={(_, newValue) =>
        setLanguage(newValue ? newValue.iso_639_1.toLowerCase() : "")
      }
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          key={option.iso_639_1}
          sx={{
            "& > img": {
              mr: 2,
              flexShrink: 0,
              display: "inline-block",
              width: 20,
            },
          }}
        >
          {option.english_name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Language"
          disabled={!languages.length}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
