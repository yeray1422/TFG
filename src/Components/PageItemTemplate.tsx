import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageItem from "../Models/PageItem";

interface PageItemProps {
  pageItem: PageItem;
}

const PageItemTemplate = (props: PageItemProps) => {
  const navigate = useNavigate();

  const handlePageItemClick: () => void = () => {
    navigate(props.pageItem.page);
  };

  const renderDescription = () => {
    if (props.pageItem.description) {
      return (
        <Typography variant="body2" color="text.secondary">
          {props.pageItem.description}
        </Typography>
      );
    } else {
      return;
    }
  };

  return (
    <Card className="home-item">
      <CardActionArea onClick={handlePageItemClick}>
        <CardMedia
          component="img"
          height="140"
          image={props.pageItem.image}
          alt="prueba"
        />
        <CardContent className="home-item-content">
          <Typography gutterBottom variant="h5" component="div">
            {props.pageItem.title}
          </Typography>
          {renderDescription()}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PageItemTemplate;
