import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCards from "../Models/HomeCards";

interface HomeCardsProps {
  pageLogo: HomeCards;
}

const HomeItem = (props: HomeCardsProps) => {
  const navigate = useNavigate();

  const handleHomeItemClick: () => void = () => {
    navigate(props.pageLogo.page);
  };

  return (
    <Card className="home-item">
      <CardActionArea onClick={handleHomeItemClick}>
        <CardMedia
          component="img"
          height="140"
          image={props.pageLogo.image}
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
