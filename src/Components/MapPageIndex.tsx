/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Collapse,
  Link,
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

interface MapPageItemsProps {
  items: MapItem[];
}

const MapPageIndex = (props: MapPageItemsProps) => {
  const [construibles, setConstruibles] = useState<MapItem[]>([]);
  const [easterEgg, setEasterEgg] = useState<MapItem[]>([]);
  const [openConstruibles, setOpenConstruibles] = useState(false);
  const [openEasterEgg, setOpenEasterEgg] = useState(false);

  let itemName = "";

  useEffect(() => {
    setConstruibles(props.items.filter((item) => item.type === "construible"));

    setEasterEgg(props.items.filter((item) => item.type === "easter_egg"));
  }, [props.items]);

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
              {construibles.map((construible) => {
                if (construible.name !== itemName) {
                  itemName = construible.name;

                  return (
                    <ListItemButton key={construible.id} sx={{ pl: 6 }}>
                      <ListItemIcon>
                        <span
                          style={{ fontSize: "1.25rem", marginTop: "-5px" }}
                        >
                          {getEmoji(construible.emoji)}
                        </span>
                      </ListItemIcon>
                      <Link href={`#${construible.name}`}>
                        <ListItemText primary={construible.name} />
                      </Link>
                    </ListItemButton>
                  );
                } else {
                  return "";
                }
              })}
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
              {easterEgg.map((step) => {
                if (step.name !== itemName) {
                  itemName = step.name;

                  return (
                    <ListItemButton key={step.id} sx={{ pl: 6 }}>
                      <ListItemIcon>
                        <span
                          style={{ fontSize: "1.25rem", marginTop: "-5px" }}
                        >
                          {getEmoji(step.emoji)}
                        </span>
                      </ListItemIcon>
                      <Link href={`#${step.name}`}>
                        <ListItemText primary={step.name} />
                      </Link>
                    </ListItemButton>
                  );
                } else {
                  return "";
                }
              })}
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
};

export default MapPageIndex;
