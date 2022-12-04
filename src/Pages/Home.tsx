import { CircularProgress, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentsForm from "../Components/CommentsForm/CommentsForm";
import PageItemTemplate from "../Components/PageItem/PageItemTemplate";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import { getCardsArray, getPageLogo } from "../Utils/APICalls";
import constants from "../Utils/Constants";

import styles from "./Home.module.css";

const pageLogosInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogosInitialState);
  const [homeCardsArray, setHomeCardsArray] = useState<PageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getPageLogo("home", setPageLogo, setIsLoading);
    getCardsArray("home-cards", setHomeCardsArray, setIsLoading);
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
          <Stack
            justifyContent="center"
            alignItems="center"
            className={styles.paper}
          >
            <img src={pageLogo.logo} alt="" className={styles["pages-logo"]} />
            <div className={styles["pages-subtitle"]}>
              <p>{pageLogo.description}</p>
            </div>
          </Stack>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={2}
            columns={{ xs: 3, sm: 6, md: 9 }}
            className={styles["pages-item-list"]}
          >
            {homeCardsArray.map((pageItem) => (
              <Grid item key={pageItem.id} xs={3}>
                <PageItemTemplate pageItem={pageItem} />
              </Grid>
            ))}
          </Grid>
          <CommentsForm />
        </>
      )}
    </>
  );
};

export default Home;
