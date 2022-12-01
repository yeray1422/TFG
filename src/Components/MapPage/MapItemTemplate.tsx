import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import styles from "./MapItemTemplate.module.css";

interface MapItemProps {
  piece: string;
  locationsObject: Record<string, string>[];
}

const MapItemTemplate = (props: MapItemProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [values] = useState(Object.values(props.locationsObject));

  const handleLeftButtonClick: () => void = () => {
    if (selectedImage <= 0) {
      setSelectedImage(values.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleRightButtonClick: () => void = () => {
    if (selectedImage >= values.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <Card className={styles["map-item-card"]}>
      <CardMedia component="div" className={styles["map-item-images"]}>
        <div>
          <IconButton
            onClick={handleLeftButtonClick}
            className={styles["left-arrow"]}
            disabled={values.length <= 1}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <img
            src={values[selectedImage]["image"]}
            alt=""
            className={styles["item-image"]}
          />
        </div>
        <div>
          <IconButton
            onClick={handleRightButtonClick}
            className={styles["right-arrow"]}
            disabled={values.length <= 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </CardMedia>
      <CardContent>
        <Divider variant="middle" sx={{ mt: "5px" }} />
        <CardHeader title={props.piece} />
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {values[selectedImage]["description"]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MapItemTemplate;
