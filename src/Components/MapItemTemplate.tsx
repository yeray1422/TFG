import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MapItem from "../Models/MapItem";

import styles from "./MapItemTemplate.module.css";

interface MapItemProps {
  item: MapItem;
}

const MapItemTemplate = (props: MapItemProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleLeftButtonClick: () => void = () => {
    if (selectedImage <= 0) {
      setSelectedImage(props.item.location.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleRightButtonClick: () => void = () => {
    if (selectedImage >= props.item.location.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const getSelectedImage: () => string = () => {
    return props.item.location[selectedImage];
  };

  const getSelectedDescription: () => string = () => {
    return props.item.description[selectedImage];
  };

  return (
    <Card className={styles["map-item-card"]}>
      <CardMedia component="div" className={styles["map-item-images"]}>
        <div>
          <IconButton
            onClick={handleLeftButtonClick}
            className={styles["left-arrow"]}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <img
            src={getSelectedImage()}
            alt=""
            className={styles["item-image"]}
          />
        </div>
        <div>
          <IconButton
            onClick={handleRightButtonClick}
            className={styles["right-arrow"]}
          >
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </CardMedia>
      <CardContent>
        <CardHeader title={props.item.part} />
        <Typography variant="body2" color="text.secondary">
          {getSelectedDescription()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MapItemTemplate;
