import axios from "axios";
import Comments from "../Models/Comments";
import MapItem from "../Models/MapItem";
import PageItem from "../Models/PageItem";
import PageLogos from "../Models/PageLogos";
import constants from "./Constants";

const getPageLogo = async (
  page: string,
  setPageLogo: React.Dispatch<React.SetStateAction<PageLogos>>
) => {
  await axios
    .get(`${constants.BASE_URL}logos`, {
      params: {
        page: `eq.${page}`,
      },
      headers: {
        apikey: constants.APIKEY,
      },
    })
    .then((res) => setPageLogo(res.data[0]))
    .catch((e) => {
      setPageLogo(constants.PAGE_LOGOS_INITIAL_STATE);
      console.log(e);
    });
};

const getCardsArray = async (
  endpoint: string,
  setCardsArray: React.Dispatch<React.SetStateAction<PageItem[]>>
) => {
  await axios
    .get(`${constants.BASE_URL}${endpoint}`, {
      headers: {
        apikey: constants.APIKEY,
      },
    })
    .then((res) => setCardsArray(res.data))
    .catch((e) => {
      setCardsArray([]);
      console.log(e);
    });
};

const getMapItems = async (
  endpoint: string,
  setMapItems: React.Dispatch<React.SetStateAction<MapItem[]>>
) => {
  await axios
    .get(`${constants.BASE_URL}${endpoint}`, {
      headers: {
        apikey: constants.APIKEY,
      },
    })
    .then((res) => setMapItems(res.data))
    .catch((e) => {
      setMapItems([]);
      console.log(e);
    });
};

const postComment = async (
  comment: Comments,
  setFormSubmited: React.Dispatch<React.SetStateAction<boolean>>,
  setFormNotSubmited: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await axios
    .post(`${constants.BASE_URL}comments`, comment, {
      headers: {
        apikey: constants.APIKEY,
      },
    })
    .then(() => setFormSubmited(true))
    .catch(() => setFormNotSubmited(true));
};

export { getPageLogo, getCardsArray, getMapItems, postComment };
