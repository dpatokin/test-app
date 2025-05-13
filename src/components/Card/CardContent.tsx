import {
  CardContent as MUICardContent,
  Stack,
  Typography,
} from "@mui/material";
import CardUserScore from "./CardUserScore";
import CardGenres from "./CardGenres";
import CardDetails from "./CardDetails";
import { MediaItem } from "../../types";

export default function CardContent(
  props: Pick<
    MediaItem,
    | "overview"
    | "adult"
    | "genre_ids"
    | "release_date"
    | "original_language"
    | "vote_average"
  >,
) {
  const {
    overview,
    adult,
    genre_ids,
    release_date,
    original_language,
    vote_average,
  } = props;

  return (
    <MUICardContent>
      <Typography
        sx={{
          color: "text.secondary",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 3,
        }}
      >
        {overview}
      </Typography>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        textAlign="start"
        spacing={2}
        sx={{ mt: 1.5 }}
      >
        <CardDetails {...{ release_date, original_language }} />
        {adult && (
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            For adults
          </Typography>
        )}
        <CardUserScore {...{ vote_average }} />
      </Stack>
      <CardGenres genreIDs={genre_ids} />
    </MUICardContent>
  );
}
