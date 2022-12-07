import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import stls from "./MapItemTemplate.module.css";

interface MapItemProps {
  piece: string;
  locationsObject: Record<string, string>[];
  keysLength: number;
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

  const getImgSize = () => {
    if (props.keysLength === 1) {
      return "item-image-1";
    }
    if (props.keysLength % 2 === 0) {
      return "item-image-2";
    }
    return "item-image-3";
  };

  return (
    <Card className={stls["map-item-card"]}>
      <CardMedia component="div" className={stls["map-item-images"]}>
        <div>
          <Tooltip title="Anterior" arrow>
            <IconButton
              onClick={handleLeftButtonClick}
              className={stls["left-arrow"]}
              disabled={values.length <= 1}
            >
              <KeyboardArrowLeft />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <img
            src={values[selectedImage]["image"]}
            alt=""
            className={`${stls["item-image"]} ${stls[getImgSize()]}`}
          />
        </div>
        <div>
          <Tooltip title="Siguiente" arrow>
            <IconButton
              onClick={handleRightButtonClick}
              className={stls["right-arrow"]}
              disabled={values.length <= 1}
            >
              <KeyboardArrowRight />
            </IconButton>
          </Tooltip>
        </div>
      </CardMedia>
      <CardContent>
        <Divider variant="middle" className={stls.divider} />
        <CardHeader title={props.piece} />
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {values[selectedImage]["description"]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MapItemTemplate;
