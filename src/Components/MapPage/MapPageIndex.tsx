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
            <Tooltip title={openConstruibles ? "Ocultar" : "Expandir"} arrow>
              {openConstruibles ? <ExpandLess /> : <ExpandMore />}
            </Tooltip>
          </ListItemButton>
          <Collapse in={openConstruibles}>
            <p className="note">
              *Nota: No todos los constuibles son necesarios para completar el
              easter egg, pero siempre ayudan.
            </p>
            <List component="div">
              {construibles.map((construible) => (
                <Tooltip title={`Ir a ${construible.name}`} arrow>
                  <ListItemButton key={construible.id} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                        {getEmoji(construible.emoji)}
                      </span>
                    </ListItemIcon>
                    <Link href={`#${construible.name}`}>
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
          <ListItemButton onClick={() => setOpenEasterEgg(!openEasterEgg)}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
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
                <Tooltip title={`Ir a ${step.name}`} arrow>
                  <ListItemButton key={step.id} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                        {getEmoji(step.emoji)}
                      </span>
                    </ListItemIcon>
                    <Link href={`#${step.name}`}>
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
          <ListItemButton onClick={() => setOpenEasterEgg2(!openEasterEgg2)}>
            <ListItemIcon>
              <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
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
                <Tooltip title={`Ir a ${secund.name}`} arrow>
                  <ListItemButton key={secund.id} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <span style={{ fontSize: "1.25rem", marginTop: "-5px" }}>
                        {getEmoji(secund.emoji)}
                      </span>
                    </ListItemIcon>
                    <Link href={`#${secund.name}`}>
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
