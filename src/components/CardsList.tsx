import Grid from "@mui/material/Grid";
import { ReactElement } from "react";
import Card from "./Card.tsx";
import { Item } from "../types";

export default function CardsList({
  fetchedData,
}: {
  fetchedData: Item[];
}): ReactElement {
  const itemsList =
    fetchedData.length > 0 &&
    fetchedData.map((item: Item) => <Card key={item.id} {...item} />);

  return (
    <>
      {fetchedData.length > 0 && (
        <Grid container spacing={3} mt={8}>
          {itemsList}
        </Grid>
      )}
    </>
  );
}
