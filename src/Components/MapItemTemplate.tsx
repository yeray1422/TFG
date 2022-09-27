import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MapItem from "../Models/MapItem";

interface MapItemProps {
  mapItem: MapItem;
}

const MapItemTemplate = (props: MapItemProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleLeftButtonClick: () => void = () => {
    if (selectedImage <= 0) {
      setSelectedImage(props.mapItem.locationImages.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleRightButtonClick: () => void = () => {
    if (selectedImage >= (props.mapItem.locationImages.length - 1)) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  }

  const getSelectedImage: () => string = () => {
    return props.mapItem.locationImages[selectedImage];
  };

  const handleDetailsButtonClick: () => void = () => {
    console.log("Details button click");    
  }

  return (
    <Card>
      <CardMedia component="div">
        <IconButton onClick={handleLeftButtonClick} className="map-item-left">
          <KeyboardArrowLeft />
        </IconButton>
        <img src={getSelectedImage()} alt="" />
        <IconButton onClick={handleRightButtonClick} className="map-item-left">
          <KeyboardArrowRight />
        </IconButton>
      </CardMedia>
      <Typography variant="h5" component="div">
        {props.mapItem.partNumber}
      </Typography>
      <CardActions>
        <Button size="small" variant="outlined" color="info" onClick={handleDetailsButtonClick}>See Details</Button>
      </CardActions>
    </Card>
  );
};

export default MapItemTemplate;
