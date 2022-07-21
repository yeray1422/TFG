import React, { useEffect, useState } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import constants from "../Utils/Constants";
import PageLogos from "../Models/PageLogos";
import HomeItem from "../Components/HomeItem";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);
  const [pageLogosArray, setPageLogosArray] = useState<Array<PageLogos>>([]);

  useEffect(() => {
    axios
      .get(`${constants.BASE_URL}logo-page`, {
        params: {
          page: "home",
        },
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setPageLogo(res.data))
      .catch(console.log);

    axios
      .get(`${constants.BASE_URL}logos-without-page`, {
        params: {
          page: "home",
        },
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setPageLogosArray(res.data))
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
        {pageLogosArray.map((pageLogo, index) => (
          <Grid item key={index} xs={3}>
            <HomeItem pageLogo={pageLogo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
