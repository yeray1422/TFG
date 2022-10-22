import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import News from "../Components/News";
import PageItemTemplate from "../Components/PageItemTemplate";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import constants from "../Utils/Constants";
import "./Home.css";

const pageLogosInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogosInitialState);
  const [homeCardsArray, setHomeCardsArray] = useState<Array<PageItem>>([]);

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
        {homeCardsArray.map((pageItem, index) => (
          <Grid item key={index} xs={3}>
            <PageItemTemplate pageItem={pageItem} />
          </Grid>
        ))}
      </Grid>
      <News />
    </>
  );
};

export default Home;
