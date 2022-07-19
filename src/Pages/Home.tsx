import React, { useEffect, useState } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import { Stack } from "@mui/material";
import axios from "axios";
import constants from "../Utils/Constants";
import PageLogos from "../Models/PageLogos";

const pageLogoInitialState: PageLogos = {
  id: 0,
  page: "",
  logo: "",
  description: "",
};

const Home = () => {
  const [pageLogo, setPageLogo] = useState(pageLogoInitialState);

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
  });

  return (
    <>
      <HomeNavBar />
      <Stack justifyContent="center" alignItems="center">
        <img src={pageLogo.logo} alt="" className="home-logo" />
        <div className="home-subtitle">
          <p>{pageLogo.description}</p>
        </div>
      </Stack>
    </>
  );
};

export default Home;
