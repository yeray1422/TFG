import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import News from "../Components/News";
import PageItemTemplate from "../Components/PageItemTemplate";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import { getCardsArray, getPageLogo } from "../Utils/APICalls";
import constants from "../Utils/Constants";
import "./Home.css";

const pageLogosInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogosInitialState);
  const [homeCardsArray, setHomeCardsArray] = useState<PageItem[]>([]);

  useEffect(() => {
    getPageLogo("home", setPageLogo);

    getCardsArray("home-cards", setHomeCardsArray);
  }, []);

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
        rowSpacing={2}
        columns={{ xs: 3, sm: 6, md: 9 }}
        className="pages-item-list"
      >
        {homeCardsArray.map((pageItem) => (
          <Grid item key={pageItem.id} xs={3}>
            <PageItemTemplate pageItem={pageItem} />
          </Grid>
        ))}
      </Grid>
      {/* <News /> */}
    </>
  );
};

export default Home;
