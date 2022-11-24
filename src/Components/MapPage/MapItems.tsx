import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
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

  const openCardHandler = () => {
    setOpenCard(!openCard);
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
          <IconButton onClick={openCardHandler}>
            {openCard ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
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
          {props.item.pieces.map((piece, index) => (
            <React.Fragment key={`${props.item.id}:${index}`}>
              <MapItemTemplate
                piece={piece}
                locations={props.item.locations[index]}
                descriptions={props.item.descriptions[index]}
              />
              <Divider variant="middle" />
            </React.Fragment>
          ))}
        </Collapse>
      </Card>
    </div>
  );
};

export default MapItems;
