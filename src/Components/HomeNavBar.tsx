import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const HomeNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchIconClick: () => void = () => {
    // TODO: Add functionality
    console.log("Search button click");
  };

  return (
    <AppBar position="static">
      <Stack>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zombies Easter Eggs
          </Typography>
          <IconButton onClick={handleSearchIconClick} className="search-icon">
            <Search />
          </IconButton>
          <IconButton onClick={handleOpenMenu} className="menu-icon">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className={isMenuOpen ? "show-menu-item-list menu-item-list" : "hide-menu-item-list menu-item-list"}>
          <MenuItem>Black Ops I</MenuItem> {/* onClick */}
          <MenuItem>Black Ops II</MenuItem> {/* onClick */}
          <MenuItem>Black Ops III</MenuItem> {/* onClick */}
          <MenuItem>Black Ops IV</MenuItem> {/* onClick */}
          <MenuItem>Cold War</MenuItem> {/* onClick */}
        </div>
      </Stack>
    </AppBar>
  );
};

export default HomeNavBar;