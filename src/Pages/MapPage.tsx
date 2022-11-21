/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MapItemTemplate from "../Components/MapItemTemplate";
import MapPageIndex from "../Components/MapPageIndex";
import MapItem from "../Models/MapItem";
import { getMapItems } from "../Utils/APICalls";

import styles from "./MapPage.module.css";

const MapPage = () => {
  const [items, setItems] = useState<MapItem[]>([]);

  let itemName = "";

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const pathnameSplit = pathname.split("/");

    return pathnameSplit[2];
  };

  useEffect(() => {
    getMapItems(getUrlPageName(), setItems);
  }, []);

  const renderItemName = (item: MapItem) => {
    if (itemName !== item.name) {
      itemName = item.name;
      return (
        <p className={styles["item-name"]} id={item.name}>
          {item.name}
        </p>
      );
    } else {
      return <p className={styles["white-space"]}>‎</p>;
    }
  };

  return (
    <>
      <MapPageIndex items={items} />
      <Grid
        container
        columnSpacing={1}
        rowSpacing={2}
        columns={{ xs: 3, sm: 6, md: 9 }}
      >
        {items.map((item) => (
          <Grid item key={item.id} xs={3}>
            {renderItemName(item)}
            <MapItemTemplate item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MapPage;
