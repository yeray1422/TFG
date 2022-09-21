import { KeyboardArrowRight } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import React from "react";

const ShadowsOfEvil = () => {
  return (
    <>
      <List>
        <ListSubheader component="div">
          Índice
        </ListSubheader>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <ListItemText primary="Llave de invocación" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <ListItemText primary="Escudo" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <ListItemText primary="Protector civil" />
        </ListItem>
      </List>
    </>
  );
};

export default ShadowsOfEvil;
