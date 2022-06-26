import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  MenuItem,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Stack>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zombies Easter Eggs
            </Typography>
            <IconButton onClick={handleOpenMenu} className="menu-icon">
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <div className={isMenuOpen ? "menu-item-list" : "hide-menu-item-list"}>
            <MenuItem>Black Ops I</MenuItem> {/* onClick */}
            <MenuItem>Black Ops II</MenuItem> {/* onClick */}
            <MenuItem>Black Ops III</MenuItem> {/* onClick */}
            <MenuItem>Black Ops IV</MenuItem> {/* onClick */}
            <MenuItem>Cold War</MenuItem> {/* onClick */}
          </div>
        </Stack>
      </AppBar>
    </>
  );
};

export default Home;
