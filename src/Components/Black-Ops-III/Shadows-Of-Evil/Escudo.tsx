import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MapItem from "../../../Models/MapItem";
import constants from "../../../Utils/Constants";
import MapItemTemplate from "../../MapItemTemplate";

const Escudo = () => {
  const [dataArray, setDataArray] = useState<Array<MapItem>>([]);

  useEffect(() => {
    axios
      .get(`${constants.BASE_URL}soe`, {
        headers: {
          apikey: constants.APIKEY,
        },
      })
      .then((res) => setDataArray(res.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <Grid
        container
        columnSpacing={1}
        rowSpacing={2}
        columns={{ xs: 3, sm: 6, md: 9 }}
        className="pages-item-list"
      >
        {dataArray.map((mapItem, index) => (
          <Grid item key={index} xs={3}>
            <MapItemTemplate mapItem={mapItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Escudo;
