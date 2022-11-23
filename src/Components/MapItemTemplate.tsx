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

import styles from "./MapItemTemplate.module.css";

interface MapItemProps {
  piece: string;
  locations: string[];
  descriptions: string[];
}

const MapItemTemplate = (props: MapItemProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleLeftButtonClick: () => void = () => {
    if (selectedImage <= 0) {
      setSelectedImage(props.locations.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleRightButtonClick: () => void = () => {
    if (selectedImage >= props.locations.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const getSelectedImage: () => string = () => {
    return props.locations[selectedImage];
  };

  const getSelectedDescription: () => string = () => {
    return props.descriptions[selectedImage];
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
        <CardHeader title={props.piece} />
        <Typography variant="body2" color="text.secondary">
          {getSelectedDescription()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MapItemTemplate;
