import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 20 }}>
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <TheatersIcon sx={{ display: "flex", mr: 1 }} />
            <Typography variant="h6">Cinema Finder</Typography>
          </Box>
          <Box
            sx={{ display: "flex", flex: "1 1 100%", justifyContent: "center" }}
          >
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/favorite">
              Favorite
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
