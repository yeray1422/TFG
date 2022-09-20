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
import { useNavigate } from "react-router-dom";
import constants from "../Utils/Constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <span
              className="toolbar-title"
              onClick={() => {
                navigate("/");
              }}
            >
              Zombies Easter Eggs
            </span>
          </Typography>
          <IconButton onClick={handleSearchIconClick} className="search-icon">
            <Search />
          </IconButton>
          <IconButton onClick={handleOpenMenu} className="menu-icon">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div
          className={
            isMenuOpen
              ? "show-menu-item-list menu-item-list"
              : "hide-menu-item-list menu-item-list"
          }
        >
          <MenuItem>
            <span
              className="menu-item"
              onClick={() => navigate(constants.BLACK_OPS_PAGE)}
            >
              Black Ops
            </span>
          </MenuItem>
          <MenuItem>
            <span
              className="menu-item"
              onClick={() => navigate(constants.BLACK_OPS_II_PAGE)}
            >
              Black Ops II
            </span>
          </MenuItem>
          <MenuItem>
            <span
              className="menu-item"
              onClick={() => navigate(constants.BLACK_OPS_III.PAGE)}
            >
              Black Ops III
            </span>
          </MenuItem>
          <MenuItem>
            <span
              className="menu-item"
              onClick={() => navigate(constants.BLACK_OPS_4_PAGE)}
            >
              Black Ops 4
            </span>
          </MenuItem>
          <MenuItem>
            <span
              className="menu-item"
              onClick={() => navigate(constants.BLACK_OPS_COLD_WAR_PAGE)}
            >
              Cold War
            </span>
          </MenuItem>
        </div>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
