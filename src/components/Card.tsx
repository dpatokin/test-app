import Grid from "@mui/material/Grid";
import { Item } from "../types";
import "./Card.css";
import { ReactElement } from "react";

export default function Card({
  id,
  title,
  poster_path: poster,
}: Item): ReactElement {
  return (
    <Grid size={2.4} className="seriesCard">
      <a href={"https://www.themoviedb.org/movie/" + id} target="_blank">
        {poster && (
          <img
            className="seriesCardImage"
            src={"https://image.tmdb.org/t/p/w342/" + poster}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        )}
        <h3>{title}</h3>
      </a>
    </Grid>
  );
}
