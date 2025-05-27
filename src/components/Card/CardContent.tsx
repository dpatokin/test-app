import {
  CardContent as MUICardContent,
  Stack,
  Typography,
} from "@mui/material";
import CardUserScore from "./CardUserScore";
import CardGenres from "./CardGenres";
import CardDetails from "./CardDetails";
import { MovieMediaItem, TVMediaItem } from "../../types";

export default function CardContent(
  props: Partial<
    Pick<
      MovieMediaItem,
      | "overview"
      | "adult"
      | "genre_ids"
      | "release_date"
      | "original_language"
      | "vote_average"
      | "media_type"
    > &
      Pick<TVMediaItem, "first_air_date">
  >,
) {
  const {
    overview,
    adult,
    genre_ids,
    release_date,
    first_air_date,
    original_language,
    vote_average,
    media_type,
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
        <CardDetails {...{ release_date, first_air_date, original_language }} />
        {adult && (
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            For adults
          </Typography>
        )}
        <CardUserScore vote_average={vote_average ?? 0} />
      </Stack>
      {/*TODO: fix types for this component (Partial, Pick)*/}
      <CardGenres {...{ genre_ids, media_type }} />
    </MUICardContent>
  );
}
