import { Stack, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import PageItemTemplate from "../../Components/PageItemTemplate";
import PageItem from "../../Models/PageItem";
import PageLogos from "../../Models/PageLogos";
import constants from "../../Utils/Constants";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const BlackOps3Page = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);
  const [blackOps3CardsArray, setBlackOps3CardsArray] = useState<
    Array<PageItem>
  >([]);

  useEffect(() => {
    axios
      .get(`${constants.BASE_URL}logos`, {
        params: {
          page: "eq.black-ops-3",
        },
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setPageLogo(res.data[0]))
      .catch(console.log);

    axios
      .get(`${constants.BASE_URL}bo3`, {
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setBlackOps3CardsArray(res.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <NavBar />
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
        {blackOps3CardsArray.map((pageItem, index) => (
          <Grid item key={index} xs={3}>
            <PageItemTemplate pageItem={pageItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BlackOps3Page;
