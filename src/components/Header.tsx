import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import { Link, useLocation } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { navLinks } from "./constants/navLinks.ts";

export function Header() {
  const location = useLocation();

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
            <Typography variant="h6">Cinema Randomizer</Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 100%",
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {navLinks.map(({ label, to }) => (
              <Button
                key={to}
                color={location.pathname === to ? "primary" : "inherit"}
                component={Link}
                to={to}
                size="large"
              >
                {label}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{
              position: "absolute",
              zIndex: 1,
              right: 0,
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
