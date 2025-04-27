import "./App.css";
import { Button as MUIButton } from "@mui/material";
import { useState } from "react";
import CardsList from "./components/CardsList.tsx";
import { Item } from "./types";

/*
 * Add autoloading
 * Add Local storage or DB?
 * Last step - react native
 * */

function App() {
  // TODO: move logic to a custom hook
  const [fetchedData, setFetchedData] = useState<Item[]>([]);

  const fetchData: () => void = async (): Promise<void> => {
    try {
      // https://developer.themoviedb.org/docs/getting-started
      const pageNumber: number = Math.floor(Math.random() * 501);
      const apiKey: string = "e8e89de3a95e7f0c804df47cfb465c36";
      const response: Response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`,
      );
      const result = await response.json();

      setFetchedData(result.results);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // setLoading(false);
    }
  };

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
