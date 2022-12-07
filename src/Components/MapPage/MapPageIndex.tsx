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
  Tooltip,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import styles from "./MapPageIndex.module.css";
import getEmoji from "../../Utils/Emojis";
import MapItem from "../../Models/MapItem";

interface MapPageItemsProps {
  items: MapItem[];
}

const MapPageIndex = (props: MapPageItemsProps) => {
  const [construibles, setConstruibles] = useState<MapItem[]>([]);
  const [easterEgg, setEasterEgg] = useState<MapItem[]>([]);
  const [easterEgg2, setEasterEgg2] = useState<MapItem[]>([]);
  const [openConstruibles, setOpenConstruibles] = useState(false);
  const [openEasterEgg, setOpenEasterEgg] = useState(false);
  const [openEasterEgg2, setOpenEasterEgg2] = useState(false);

  useEffect(() => {
    setConstruibles(props.items.filter((item) => item.type === "construible"));

    setEasterEgg(props.items.filter((item) => item.type === "easter_egg"));

    setEasterEgg2(props.items.filter((item) => item.type === "easter_egg2"));
  }, [props.items]);

  return (
    <List className={styles.list}>
      <ListSubheader component="h2" className={styles["list-title"]}>ÍNDICE</ListSubheader>
      {construibles.length > 0 && (
        <>
          <ListItemButton
            onClick={() => setOpenConstruibles(!openConstruibles)}
            className={styles["list-item"]}
          >
            <ListItemIcon>
              <span className={styles["list-item-icon"]}>
                {getEmoji("CONSTRUIBLES")}
              </span>
            </ListItemIcon>
            <ListItemText primary="Objetos construibles" />
            <Tooltip title={openConstruibles ? "Ocultar" : "Expandir"} arrow>
              {openConstruibles ? <ExpandLess /> : <ExpandMore />}
            </Tooltip>
          </ListItemButton>
          <Collapse in={openConstruibles}>
            <p className={styles.note}>
              *Nota: No todos los constuibles son necesarios para completar el
              easter egg, pero siempre ayudan.
            </p>
            <List component="div">
              {construibles.map((construible) => (
                <Tooltip
                  title={`Ir a ${construible.name}`}
                  arrow
                  key={construible.id}
                >
                  <ListItemButton
                    className={`${styles["list-item"]} ${styles["inner-list-item"]}`}
                  >
                    <Link
                      href={`#${construible.name}`}
                      className={styles["list-item-link"]}
                    >
                      <ListItemIcon>
                        <span className={styles["list-item-icon"]}>
                          {getEmoji(construible.emoji)}
                        </span>
                      </ListItemIcon>
                      <ListItemText primary={construible.name} />
                    </Link>
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Collapse>
        </>
      )}
      {easterEgg.length > 0 && (
        <>
          <ListItemButton
            onClick={() => setOpenEasterEgg(!openEasterEgg)}
            className={styles["list-item"]}
          >
            <ListItemIcon>
              <span className={styles["list-item-icon"]}>
                {getEmoji("EASTER_EGG")}
              </span>
            </ListItemIcon>
            <ListItemText primary="Guía Easter Egg" />
            <Tooltip title={openEasterEgg ? "Ocultar" : "Expandir"} arrow>
              {openEasterEgg ? <ExpandLess /> : <ExpandMore />}
            </Tooltip>
          </ListItemButton>
          <Collapse in={openEasterEgg}>
            <List component="div">
              {easterEgg.map((step) => (
                <Tooltip title={`Ir a ${step.name}`} arrow key={step.id}>
                  <ListItemButton
                    className={`${styles["list-item"]} ${styles["inner-list-item"]}`}
                  >
                    <Link
                      href={`#${step.name}`}
                      className={styles["list-item-link"]}
                    >
                      <ListItemIcon>
                        <span className={styles["list-item-icon"]}>
                          {getEmoji(step.emoji)}
                        </span>
                      </ListItemIcon>
                      <ListItemText primary={step.name} />
                    </Link>
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Collapse>
        </>
      )}
      {easterEgg2.length > 0 && (
        <>
          <ListItemButton
            onClick={() => setOpenEasterEgg2(!openEasterEgg2)}
            className={styles["list-item"]}
          >
            <ListItemIcon>
              <span className={styles["list-item-icon"]}>
                {getEmoji("EASTER_EGG2")}
              </span>
            </ListItemIcon>
            <ListItemText primary="Easter Eggs Secundarios" />
            <Tooltip title={openEasterEgg2 ? "Ocultar" : "Expandir"} arrow>
              {openEasterEgg2 ? <ExpandLess /> : <ExpandMore />}
            </Tooltip>
          </ListItemButton>
          <Collapse in={openEasterEgg2}>
            <List component="div">
              {easterEgg2.map((secund) => (
                <Tooltip title={`Ir a ${secund.name}`} arrow key={secund.id}>
                  <ListItemButton
                    className={`${styles["list-item"]} ${styles["inner-list-item"]}`}
                  >
                    <Link
                      href={`#${secund.name}`}
                      className={styles["list-item-link"]}
                    >
                      <ListItemIcon>
                        <span className={styles["list-item-icon"]}>
                          {getEmoji(secund.emoji)}
                        </span>
                      </ListItemIcon>
                      <ListItemText primary={secund.name} />
                    </Link>
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
};

export default MapPageIndex;
