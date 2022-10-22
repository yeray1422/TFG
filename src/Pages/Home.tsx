import axios from "axios";
import React, { useEffect, useState } from "react";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import constants from "../Utils/Constants";
import "./Home.css"

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

  return <>
    <div className="test">
      Home
    </div>
  </>;
};

export default Home;
