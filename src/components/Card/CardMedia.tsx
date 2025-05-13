import { CardMedia as MUICardMedia } from "@mui/material";
import { MediaItem } from "../../types";

export default function CardMedia(
  props: Pick<MediaItem, "title" | "poster_path">,
) {
  const { poster_path, title } = props;
  const mediaBaseURL = "https://image.tmdb.org/t/p/w342/";

  return (
    <MUICardMedia
      component="img"
      width="240px"
      height="100%"
      image={
        poster_path
          ? mediaBaseURL + poster_path
          : "https://placehold.co/240x360/222/fff?text=No+Image"
      }
      alt={title}
      sx={{ width: "240px" }}
    />
  );
}
