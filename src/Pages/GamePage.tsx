/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageItemTemplate from "../Components/PageItem/PageItemTemplate";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import { getCardsArray, getPageLogo } from "../Utils/APICalls";
import constants from "../Utils/Constants";

import styles from "./GamePage.module.css";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const GamePage = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);
  const [gamePageCardsArray, setGamePageCardsArray] = useState<Array<PageItem>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const urlPageName = pathname.substring(1);

    return urlPageName;
  };

  useEffect(() => {
    setIsLoading(true);

    getPageLogo(getUrlPageName(), setPageLogo, setIsLoading);
    getCardsArray(getUrlPageName(), setGamePageCardsArray, setIsLoading);
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className={styles.loading}>
          <CircularProgress color="info" />
        </div>
      )}
      {!isLoading && (
        <>
          <Stack justifyContent="center" alignItems="center" className={styles.paper}>
            <img src={pageLogo.logo} alt="" className={styles["pages-logo"]} />
            <div className={styles["pages-subtitle"]}>
              <p>{pageLogo.description}</p>
            </div>
          </Stack>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={1}
            columns={{ xs: 3, sm: 6, md: 9 }}
            className={styles["pages-item-list"]}
          >
            {gamePageCardsArray.map((pageItem) => (
              <Grid item key={pageItem.id} xs={3}>
                <PageItemTemplate pageItem={pageItem} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default GamePage;
