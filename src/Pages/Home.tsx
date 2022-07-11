import React from "react";
import HomeNavBar from "../Components/HomeNavBar";
import HomeLogo from "../Assets/images/home-page/zombies-logo.png";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <Stack justifyContent="center" alignItems="center">
        <img src={HomeLogo} alt="" className="home-logo" />
        <div className="home-subtitle">
          <p>La guía para completar los Easter Eggs de Call Of Duty Zombies</p>
        </div>
      </Stack>
    </>
  );
};

export default Home;
