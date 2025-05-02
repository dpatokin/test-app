import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { Container } from "@mui/material";

function App() {
  return (
    <Container sx={{ py: 8 }}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Container>
  );
}

export default App;
