import {
  Construction,
  Egg,
  ExpandLess,
  ExpandMore,
  LocalPolice,
  Shield,
  Star,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useState } from "react";
import Escudo from "../../../Components/Black-Ops-III/Shadows-Of-Evil/Escudo";
import NavBar from "../../../Components/NavBar";

const ShadowsOfEvil = () => {
  const [openConstruibles, setOpenConstruibles] = useState(false);
  const [openEasterEgg, setOpenEasterEgg] = useState(false);

  return (
    <>
      <NavBar />
      <List sx={{ mt: '50px' }}>
        <ListSubheader component="div">Índice</ListSubheader>
        <ListItemButton onClick={() => setOpenConstruibles(!openConstruibles)}>
          <ListItemIcon>
            <Construction />
          </ListItemIcon>
          <ListItemText primary="Objetos construibles" />
          {openConstruibles ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openConstruibles}>
          <p className="note">
            *Nota: No es necesario tener los construibles para completar el
            easter egg, pero siempre ayudan.
          </p>
          <List component="div">
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemIcon>
                <Shield />
              </ListItemIcon>
              <ListItemText primary="Escudo" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemIcon>
                <LocalPolice />
              </ListItemIcon>
              <ListItemText primary="Protector Civil" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary="Siervo de apoticón" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => setOpenEasterEgg(!openEasterEgg)}>
          <ListItemIcon>
            <Egg />
          </ListItemIcon>
          <ListItemText primary="Guía Easter Egg" />
          {openEasterEgg ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      <Escudo />
    </>
  );
};

export default ShadowsOfEvil;
