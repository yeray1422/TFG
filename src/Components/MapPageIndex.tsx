import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import styles from "./MapPageIndex.module.css";
import getEmoji from "../Utils/Emojis";

const MapPageIndex = () => {
  const [openConstruibles, setOpenConstruibles] = useState(false);
  const [openEasterEgg, setOpenEasterEgg] = useState(false);
  
  return (
    <List className={styles.list}>
      <ListSubheader component="h2">ÍNDICE</ListSubheader>
      <ListItemButton onClick={() => setOpenConstruibles(!openConstruibles)}>
        <ListItemIcon>
          <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>{getEmoji("CONSTRUIBLES")}</span>
        </ListItemIcon>
        <ListItemText primary="Objetos construibles" />
        {openConstruibles ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openConstruibles}>
        <p className="note">
          *Nota: No es necesario tener los construibles para completar el easter
          egg, pero siempre ayudan.
        </p>
        <List component="div">
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>{getEmoji("SHIELD")}</span>
            </ListItemIcon>
            <ListItemText primary="Escudo" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>🤖</span>
            </ListItemIcon>
            <ListItemText primary="Protector Civil" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>🔫</span>
            </ListItemIcon>
            <ListItemText primary="Siervo de apoticón" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => setOpenEasterEgg(!openEasterEgg)}>
        <ListItemIcon>
          <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>🌟</span>
        </ListItemIcon>
        <ListItemText primary="Guía Easter Egg" />
        {openEasterEgg ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </List>
  );
};

export default MapPageIndex;
