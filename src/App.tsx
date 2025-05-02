import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <TheatersIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cinema Finder
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/favorite">
            Favorite
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ pt: 17, pb: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
