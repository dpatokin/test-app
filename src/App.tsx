import "./App.css";
import { Button as MUIButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

interface Series {
  url: string;
  name: string;
  image?: { medium: string; original: string };
}

function App() {
  const [seriesData, setSeriesData] = useState([]);

  const fetchData: () => void = async () => {
    try {
      const pageNumber: number = Math.floor(Math.random() * 336);
      console.log(pageNumber);
      const response = await fetch(
        `https://api.tvmaze.com/shows?page=${pageNumber}`,
      );
      const result = await response.json();

      setSeriesData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // setLoading(false);
    }
  };
  const seriesList =
    seriesData.length > 0 &&
    seriesData.map((series: Series, i) => (
      <Grid size={2} className="seriesCard" key={i}>
        <a href={series.url} target="_blank" rel="noopener noreferrer">
          <h3 key={i}>{series.name}</h3>
          {series.image && <img src={series.image.medium} alt={series.name} />}
        </a>
      </Grid>
    ));

  return (
    <>
      <MUIButton variant="contained" onClick={fetchData}>
        Get series
      </MUIButton>
      {seriesData.length > 0 && (
        <Grid container spacing={3} mt={8}>
          {seriesList}
        </Grid>
      )}
    </>
  );
}

export default App;
