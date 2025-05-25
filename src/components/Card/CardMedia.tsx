import {
  CardMedia as MUICardMedia,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { MediaItem } from "../../types";

export default function CardMedia(
  props: Pick<MediaItem, "title" | "poster_path">,
) {
  const { poster_path, title } = props;
  const mediaBaseURL = "https://image.tmdb.org/t/p/w500/";
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "240px",
        height: "360px",
      }}
    >
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <MUICardMedia
        component="img"
        width="500"
        height="750"
        image={
          poster_path
            ? mediaBaseURL + poster_path
            : "https://placehold.co/240x360/222/fff?text=No+Image"
        }
        alt={title}
        sx={{
          width: "240px",
          height: "100%",
          display: loading ? "none" : "block",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
}
