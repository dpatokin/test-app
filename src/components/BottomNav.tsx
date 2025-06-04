import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      sx={{
        display: { md: "none" },
        background:
          "#121212 linear-gradient(rgba(255, 255, 255, 0.092), rgba(255, 255, 255, 0.092))",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      value={value}
      onChange={(_event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Favorite"
        icon={<FavoriteIcon />}
        component={Link}
        to="/favorite"
      />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
