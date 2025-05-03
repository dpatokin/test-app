import Grid from "@mui/material/Grid";
import { Item } from "../types";
import { ReactElement } from "react";
import {
  Box,
  Card as MUICard,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { CardButtonFavorite } from "./CardButtonFavorite.tsx";

export default function Card({
  id,
  title,
  poster_path: poster,
  release_date,
  overview,
}: Item): ReactElement {
  const mediaBaseURL = "https://image.tmdb.org/t/p/w342/";
  const releaseDate: number = new Date(release_date)?.getFullYear();
  const movieURL = "https://www.themoviedb.org/movie/" + id;

  return (
    <Grid size={6} className="seriesCard">
      <MUICard
        className="seriesCard"
        sx={{ display: "flex", alignItems: "flex-start", height: "100%" }}
      >
        {poster && (
          <CardMedia
            component="img"
            width="180px"
            image={mediaBaseURL + poster}
            alt={title}
            sx={{ width: "180px" }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardHeader title={title} subheader={releaseDate} />
          <CardContent>
            <Typography
              variant="body2"
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
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Button size="small" href={movieURL} target="_blank">
              Learn More
            </Button>
            <CardButtonFavorite id={id} />
          </CardActions>
        </Box>
      </MUICard>
    </Grid>
  );
}
