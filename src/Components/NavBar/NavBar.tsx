import React, { useState } from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Autocomplete,
  TextField,
} from "@mui/material";
import { ArrowBack, Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./NavBar.css";
import constants from "../../Utils/Constants";
import SearchOptions from "../../Utils/SearchOptions";

interface SearchInputProps {
  toggle: () => void;
}

const SearchInput = (props: SearchInputProps) => {
  const [value, setValue] = useState<String | null>(null);
  const navigate = useNavigate();

  const SearchOptionsArray: string[] = [
    ...SearchOptions.map((searchOptions) => searchOptions.inputValue),
  ];

  const confirmOption: (e: React.KeyboardEvent<HTMLDivElement>) => void = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.key === "Enter") {
      const selectedOption = SearchOptions.find(
        (searchOption) => searchOption.inputValue === value
      );
      const page = selectedOption?.page || "notFound";

      navigate(page);
      props.toggle();
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      width="100%"
    >
      <IconButton onClick={props.toggle}>
        <ArrowBack />
      </IconButton>
      <Autocomplete
        options={SearchOptionsArray}
        renderInput={(params) => (
          <TextField {...params} label="Busqúeda de Mapas" />
        )}
        value={value}
        onChange={(event: any, newValue: String | null) => setValue(newValue)}
        freeSolo
        fullWidth
        onKeyDown={confirmOption}
      />
    </Stack>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);

  const toggleMenuHandler: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchInputHandler: () => void = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <AppBar position="fixed">
      <Stack className="nav-bar">
        <Toolbar>
          {!isSearchInputOpen && (
            <>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="toolbar-title">
                  <span>Zombies Easter Eggs</span>
                </Link>
              </Typography>
              <IconButton onClick={toggleSearchInputHandler}>
                <Search />
              </IconButton>
              <IconButton onClick={toggleMenuHandler} className="menu-icon">
                <MenuIcon />
              </IconButton>
            </>
          )}
          {isSearchInputOpen && (
            <SearchInput toggle={toggleSearchInputHandler} />
          )}
        </Toolbar>
        <div
          className={`menu-item-list ${
            !isMenuOpen ? "hide-menu-item-list" : "show-menu-item-list"
          }`}
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
