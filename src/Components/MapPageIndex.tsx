import React, { useEffect, useState } from "react";
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
import MapItem from "../Models/MapItem";
import { getMapItems } from "../Utils/APICalls";
import { useLocation } from "react-router-dom";

const MapPageIndex = () => {
  const [indexItems, setIndexItems] = useState<MapItem[]>([]);
  const [construibles, setConstruibles] = useState<MapItem[]>([]);
  const [easterEgg, setEasterEgg] = useState<MapItem[]>([]);
  const [openConstruibles, setOpenConstruibles] = useState(false);
  const [openEasterEgg, setOpenEasterEgg] = useState(false);

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const pathnameSplit = pathname.split("/");

    return pathnameSplit[2];
  };

  useEffect(() => {
    getMapItems(getUrlPageName(), setIndexItems);
  }, []);

  useEffect(() => {
    setConstruibles(
      indexItems.filter((indexItem) => indexItem.type === "construible")
    );

    setEasterEgg(
      indexItems.filter((itemIndex) => itemIndex.type === "easter_egg")
    );
  }, [indexItems]);

  return (
    <List className={styles.list}>
      <ListSubheader component="h2">ÍNDICE</ListSubheader>
      {construibles.length > 0 && (
        <>
          <ListItemButton
            onClick={() => setOpenConstruibles(!openConstruibles)}
          >
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                {getEmoji("CONSTRUIBLES")}
              </span>
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
              {construibles.map((construible) => (
                <ListItemButton key={construible.id} sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                      {getEmoji(construible.emoji)}
                    </span>
                  </ListItemIcon>
                  <ListItemText primary={construible.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      )}
      {easterEgg.length > 0 && (
        <>
          <ListItemButton onClick={() => setOpenEasterEgg(!openEasterEgg)}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>🌟</span>
            </ListItemIcon>
            <ListItemText primary="Guía Easter Egg" />
            {openEasterEgg ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openEasterEgg}>
            <List component="div">
              {easterEgg.map((step) => (
                <ListItemButton key={step.id} sx={{ pl: 6 }}>
                  <ListItemIcon>
                  <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                      {getEmoji(step.emoji)}
                    </span>
                  </ListItemIcon>
                  <ListItemText primary={step.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
};

export default MapPageIndex;
