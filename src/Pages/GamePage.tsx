/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageItemTemplate from "../Components/PageItemTemplate";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import { getCardsArray, getPageLogo } from "../Utils/APICalls";
import constants from "../Utils/Constants";

import "./GamePage.css";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const GamePage = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);
  const [gamePageCardsArray, setGamePageCardsArray] = useState<Array<PageItem>>(
    []
  );
  const location = useLocation();

  const getUrlPageName: () => string = () => {
    const pathname = location.pathname;
    const urlPageName = pathname.substring(1);

    return urlPageName;
  };

  useEffect(() => {
    getPageLogo(getUrlPageName(), setPageLogo);
    getCardsArray(getUrlPageName(), setGamePageCardsArray);
  }, [location.pathname]);

  return (
    <>
      <Stack justifyContent="center" alignItems="center" className="paper">
        <img src={pageLogo.logo} alt="" className="pages-logo" />
        <div className="pages-subtitle">
          <p>{pageLogo.description}</p>
        </div>
      </Stack>
      <Grid
        container
        columnSpacing={1}
        rowSpacing={1}
        columns={{ xs: 3, sm: 6, md: 9 }}
        className="pages-item-list"
      >
        {gamePageCardsArray.map((pageItem) => (
          <Grid item key={pageItem.id} xs={3}>
            <PageItemTemplate pageItem={pageItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GamePage;
