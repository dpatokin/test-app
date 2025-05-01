import { Box, Button as MUIButton, Container } from "@mui/material";
import CardsList from "./components/CardsList.tsx";
import { useFetchData } from "./hooks/useFetchData.ts";

/*
 * Add autoloading
 * Add Local storage or DB?
 * Last step - react native
 * */

function App() {
  const { fetchedData, fetchData } = useFetchData();

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <MUIButton variant="contained" onClick={fetchData} size="large">
          Get series
        </MUIButton>
      </Box>
      <CardsList fetchedData={fetchedData} />
    </Container>
  );
}

export default App;
