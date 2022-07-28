import React, { useEffect, useState } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import constants from "../Utils/Constants";
import PageLogos from "../Models/PageLogos";
import HomeItem from "../Components/HomeItem";
import HomeCards from "../Models/HomeCards";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);
  const [homeCardsArray, setHomeCardsArray] = useState<Array<HomeCards>>([]);

  useEffect(() => {
    axios
      .get(`${constants.BASE_URL}logos`, {
        params: {
          page: "eq.home",
        },
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setPageLogo(res.data[0]))
      .catch(console.log);

    axios
      .get(`${constants.BASE_URL}home-cards`, {
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setHomeCardsArray(res.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <HomeNavBar />
      <Stack justifyContent="center" alignItems="center" className="paper">
        <img src={pageLogo.logo} alt="" className="home-logo" />
        <div className="home-subtitle">
          <p>{pageLogo.description}</p>
        </div>
      </Stack>
      <Grid container columnSpacing={1} rowSpacing={2} columns={{ xs: 3, sm: 6, md: 9 }} className="home-item-list">
        {homeCardsArray.map((pageLogo, index) => (
          <Grid item key={index} xs={3}>
            <HomeItem pageLogo={pageLogo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
