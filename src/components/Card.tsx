import Grid from "@mui/material/Grid";
import { Item } from "../types";
import { ReactElement } from "react";
import {
  Box,
  Card as MUICard,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Card({
  id,
  title,
  poster_path: poster,
  release_date,
}: Item): ReactElement {
  const mediaBaseURL = "https://image.tmdb.org/t/p/w342/";
  const releaseDate: number = new Date(release_date)?.getFullYear();
  const movieURL = "https://www.themoviedb.org/movie/" + id;

  return (
    <Grid size={6} className="seriesCard">
      <MUICard className="seriesCard">
        <CardActionArea
          href={movieURL}
          target="_blank"
          sx={{ display: "flex", alignItems: "flex-start" }}
        >
          {poster && (
            <CardMedia
              component="img"
              width="200px"
              image={mediaBaseURL + poster}
              alt={title}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader title={title} subheader={releaseDate} />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </MUICard>
    </Grid>
  );
}
