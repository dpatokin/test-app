import { Box, Button as MUIButton, Container } from "@mui/material";
import CardsList from "../components/CardsList.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";

export default function Home() {
  const { fetchedData, fetchData } = useFetchData();

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <MUIButton variant="contained" onClick={fetchData} size="large">
          Get series
        </MUIButton>
      </Box>
      <CardsList fetchedData={fetchedData} />
    </Container>
  );
}
