import React, { useState } from "react";
import MapItem from "../Models/MapItem";

interface MapItemProps {
  mapItem: MapItem;
}

const MapItemTemplate = (props: MapItemProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return <div>MapItemTemplate</div>;
};

export default MapItemTemplate;
