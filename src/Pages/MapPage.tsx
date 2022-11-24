/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MapItems from "../Components/MapPage/MapItems";
import MapPageIndex from "../Components/MapPage/MapPageIndex";
import MapItem from "../Models/MapItem";
import { getMapItems } from "../Utils/APICalls";

const MapPage = () => {
  const [items, setItems] = useState<MapItem[]>([]);

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const pathnameSplit = pathname.split("/");

    return pathnameSplit[2];
  };

  useEffect(() => {
    getMapItems(getUrlPageName(), setItems);
  }, []);

  return (
    <>
      <MapPageIndex items={items} />
      {items.map((item) => (
        <MapItems key={item.id} item={item} />
      ))}
    </>
  );
};

export default MapPage;
