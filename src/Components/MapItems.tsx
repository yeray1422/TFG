import React from "react";
import MapItem from "../Models/MapItem";
import MapItemTemplate from "./MapItemTemplate";

interface MapItemsProps {
  item: MapItem;
}

const MapItems = (props: MapItemsProps) => {
  return (
    <div>
      <div>
        <h2 id={props.item.name}>{props.item.name}</h2>
      </div>
      {props.item.pieces.map((piece, index) => (
        <MapItemTemplate
          key={`${props.item.id}:${index}`}
          piece={piece}
          locations={props.item.locations[index]}
          descriptions={props.item.descriptions[index]}
        />
      ))}
    </div>
  );
};

export default MapItems;
