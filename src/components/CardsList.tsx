import Grid from "@mui/material/Grid";
import { ReactElement } from "react";
import Card from "./Card.tsx";
import { Item } from "../types";

export default function CardsList({
  fetchedData,
}: {
  fetchedData: Item[];
}): ReactElement {
  return (
    <>
      {fetchedData.length > 0 && (
        <Grid container spacing={2} mt={8}>
          {fetchedData.length > 0 &&
            fetchedData.map((item: Item) => <Card key={item.id} {...item} />)}
        </Grid>
      )}
    </>
  );
}
