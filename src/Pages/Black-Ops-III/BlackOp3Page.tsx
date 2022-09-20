import { Stack, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import PageLogos from "../../Models/PageLogos";
import constants from "../../Utils/Constants";
// import ComingSoon from "../ComingSoon";

const pageLogoInitialState: PageLogos = constants.PAGE_LOGOS_INITIAL_STATE;

const BlackOps3Page = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);

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
        
      </Grid>
    </>
  );
};

export default BlackOps3Page;
