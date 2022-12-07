import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MapItem from "../../Models/MapItem";
import MapItemTemplate from "./MapItemTemplate";

import styles from "./MapItems.module.css";
import { Stack } from "@mui/system";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface MapItemsProps {
  item: MapItem;
}

const MapItems = (props: MapItemsProps) => {
  const [openCard, setOpenCard] = useState(false);
  const [keys] = useState(Object.keys(props.item.data));
  const [values] = useState(Object.values(props.item.data));

  const openCardHandler = () => {
    setOpenCard(!openCard);
  };

  const getGrid = () => {
    if (keys.length === 1) {
      return { xs: 1, sm: 1, md: 1 };
    }
    if (keys.length % 2 === 0) {
      return { xs: 1, sm: 2, md: 2 };
    }
    return { xs: 1, sm: 2, md: 3 }
  };

  return (
    <div>
      <Card className={styles.card}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardHeader id={props.item.name} title={props.item.name} />
          <Tooltip title={openCard ? "Ocultar" : "Expandir"} arrow>
            <IconButton onClick={openCardHandler}>
              {openCard ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Tooltip>
        </Stack>
        <Divider variant="middle" />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            {props.item.usage}
          </Typography>
        </CardContent>
        <Collapse in={openCard}>
          <Grid container columns={getGrid()} columnSpacing={1} rowSpacing={2}>
            {keys.map((key, index) => {
              return (
                <Grid item xs={1} key={`${props.item.id}:${index}`}>
                  <MapItemTemplate
                    piece={key}
                    locationsObject={Object.values(values[index])}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Collapse>
      </Card>
    </div>
  );
};

export default MapItems;
