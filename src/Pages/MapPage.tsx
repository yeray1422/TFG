/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MapItems from "../Components/MapPage/MapItems";
import MapPageIndex from "../Components/MapPage/MapPageIndex";
import MapItem from "../Models/MapItem";
import { getMapItems } from "../Utils/APICalls";

import styles from "./MapPage.module.css";

const MapPage = () => {
  const [items, setItems] = useState<MapItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const pathnameSplit = pathname.split("/");

    return pathnameSplit[2];
  };

  useEffect(() => {
    setIsLoading(true);

    getMapItems(getUrlPageName(), setItems, setIsLoading);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.loading}>
          <CircularProgress color="info" />
        </div>
      )}
      {!isLoading && (
        <>
          <MapPageIndex items={items} />
          {items.map((item) => {
            return <MapItems key={item.id} item={item} />;
          })}
        </>
      )}
    </>
  );
};

export default MapPage;
