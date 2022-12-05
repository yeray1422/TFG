/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MapItems from "../Components/MapPage/MapItems";
import MapPageIndex from "../Components/MapPage/MapPageIndex";
import AlertDialog from "../Components/UI/AlertDialog";
import MapItem from "../Models/MapItem";
import { getMapItems } from "../Utils/APICalls";

import styles from "./MapPage.module.css";

const MapPage = () => {
  const [items, setItems] = useState<MapItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const pathnameSplit = pathname.split("/");

    return pathnameSplit[2];
  };

  useEffect(() => {
    setIsLoading(true);

    getMapItems(getUrlPageName(), setItems, setIsLoading, setLoadingError);
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
          <AlertDialog
            open={loadingError}
            title="Algo ha ido mal..."
            message="Si el problema persiste, inténtelo de nuevo más tarde"
            accept={() => setLoadingError(false)}
          />
        </>
      )}
    </>
  );
};

export default MapPage;
