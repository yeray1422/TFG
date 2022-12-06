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
  Tooltip,
} from "@mui/material";
import { ArrowBack, Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";

import stls from "./NavBar.module.css";
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
      <Tooltip title="Ocultar barra de búsqueda">
        <IconButton onClick={props.toggle}>
          <ArrowBack />
        </IconButton>
      </Tooltip>
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
        clearText="Borrar"
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
      <Stack className={stls["nav-bar"]}>
        <Toolbar>
          {!isSearchInputOpen && (
            <>
              <Typography variant="h5" component="div" className={stls.typography}>
                <Link to="/" className={stls["toolbar-title"]}>
                  <span>Zombies Easter Eggs</span>
                </Link>
              </Typography>
              <Tooltip title="Buscar">
                <IconButton onClick={toggleSearchInputHandler}>
                  <Search />
                </IconButton>
              </Tooltip>
              <Tooltip title={isMenuOpen ? "Ocultar Menú" : "Desplegar Menú"}>
                <IconButton
                  onClick={toggleMenuHandler}
                  className={stls["menu-icon"]}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
          {isSearchInputOpen && (
            <SearchInput toggle={toggleSearchInputHandler} />
          )}
        </Toolbar>
        <div
          className={`${stls["menu-item-list"]} ${
            stls[!isMenuOpen ? "hide-menu-item-list" : "show-menu-item-list"]
          }`}
        >
          <MenuItem className={stls["menu-item"]}>
            <NavLink
              className={`${stls["menu-item-link"]} ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_PAGE}`}
            >
              Black Ops
            </NavLink>
          </MenuItem>
          <MenuItem className={stls["menu-item"]}>
            <NavLink
              className={`${stls["menu-item-link"]} ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_II_PAGE}`}
            >
              Black Ops II
            </NavLink>
          </MenuItem>
          <MenuItem className={stls["menu-item"]}>
            <NavLink
              className={`${stls["menu-item-link"]} ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_III.PAGE}`}
            >
              Black Ops III
            </NavLink>
          </MenuItem>
          <MenuItem className={stls["menu-item"]}>
            <NavLink
              className={`${stls["menu-item-link"]} ${(props: any) =>
                props.isActive ? "active" : ""}`}
              to={`/${constants.BLACK_OPS_4_PAGE}`}
            >
              Black Ops 4
            </NavLink>
          </MenuItem>
          <MenuItem className={stls["menu-item"]}>
            <NavLink
              className={`${stls["menu-item-link"]} ${(props: any) =>
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
