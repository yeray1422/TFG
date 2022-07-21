import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import PageLogos from "../Models/PageLogos";

interface PageLogosProps {
  pageLogo: PageLogos;
}

const HomeItem = (props: PageLogosProps) => {
  return (
    <Card className="home-item">
      <CardActionArea onClick={() => console.log("CardActionArea")}>
        <CardMedia
          component="img"
          height="140"
          image={props.pageLogo.logo}
          alt="prueba"
        />
        <CardContent className="home-item-content">
          <Typography gutterBottom variant="h5" component="div">
            {props.pageLogo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.pageLogo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeItem;
