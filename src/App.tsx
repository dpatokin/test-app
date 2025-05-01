import "./App.css";
import { Button as MUIButton } from "@mui/material";
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
    <>
      <MUIButton variant="contained" onClick={fetchData}>
        Get series
      </MUIButton>
      <CardsList fetchedData={fetchedData} />
    </>
  );
}

export default App;
