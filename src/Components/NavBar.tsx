import React, { useEffect, useState } from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import constants from "../Utils/Constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenuHandler: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const searchIconClickHandler: () => void = () => {
    // TODO: add functionality
    console.log("Search button click");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <AppBar position="fixed">
      <Stack className="nav-bar">
        <Toolbar className={`nav-bar-principal ${isScrolled && "scrolled"}`}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="toolbar-title">
              <span>Zombies Easter Eggs</span>
            </Link>
          </Typography>
          <IconButton onClick={searchIconClickHandler}>
            <Search />
          </IconButton>
          <IconButton onClick={toggleMenuHandler} className="menu-icon">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div
          className={`menu-item-list ${
            isMenuOpen ? "show-menu-item-list" : "hide-menu-item-list"
          } ${isScrolled && "scrolled"}`}
        >
          <MenuItem className="menu-item">
            <NavLink
              className={`menu-item-link ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_PAGE}`}
            >
              Black Ops
            </NavLink>
          </MenuItem>
          <MenuItem className="menu-item">
            <NavLink
              className={`menu-item-link ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_II_PAGE}`}
            >
              Black Ops II
            </NavLink>
          </MenuItem>
          <MenuItem className="menu-item">
            <NavLink
              className={`menu-item-link ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_III.PAGE}`}
            >
              Black Ops III
            </NavLink>
          </MenuItem>
          <MenuItem className="menu-item">
            <NavLink
              className={`menu-item-link ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_4_PAGE}`}
            >
              Black Ops 4
            </NavLink>
          </MenuItem>
          <MenuItem className="menu-item">
            <NavLink
              className={`menu-item-link ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_COLD_WAR_PAGE}`}
            >
              Cold War
            </NavLink>
          </MenuItem>
        </div>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
