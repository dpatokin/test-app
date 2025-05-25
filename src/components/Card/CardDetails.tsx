import { Box, Typography } from "@mui/material";
import { useGlobalData } from "../../hooks/useGlobalData.tsx";
import { MediaItem } from "../../types";

export default function CardDetails(
  props: Pick<MediaItem, "release_date" | "original_language">,
) {
  const { release_date, original_language } = props;
  const { languages: languagesList } = useGlobalData();
  const releaseDate = release_date
    ? new Date(release_date).getFullYear()
    : undefined;
  const originalLanguage = languagesList.find(
    (language) => language.iso_639_1 === original_language,
  );

  return (
    <Box>
      <Typography variant="body2" sx={{ color: "text.disabled" }}>
        Release date: {releaseDate ? releaseDate : "-"}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.disabled" }}>
        Original language: {originalLanguage?.english_name}
      </Typography>
    </Box>
  );
}
