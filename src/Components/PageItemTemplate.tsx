import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageItem from "../Models/PageItem";

interface PageItemProps {
  pageItem: PageItem;
}

const PageItemTemplate = (props: PageItemProps) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handlePageItemClick: () => void = () => {
    navigate(props.pageItem.page);
  };

  const renderDescription = () => {
    if (props.pageItem.description) {
      return (
        <Collapse in={expanded}>
          <CardContent className="page-item-content">
            <Typography variant="body2" color="text.secondary">
              {props.pageItem.description}
            </Typography>
          </CardContent>
        </Collapse>
      );
    } else {
      return;
    }
  };

  const renderButton = () => {
    if (props.pageItem.description) {
      return (
        <CardActions>
          <Button color="info" onClick={() => setExpanded(!expanded)}>
            Show Description
          </Button>
        </CardActions>
      );
    } else {
      return;
    }
  };

  return (
    <Card className="page-item">
      <CardActionArea onClick={handlePageItemClick}>
        <CardMedia component="img" height="140" image={props.pageItem.image} />
        <CardHeader title={props.pageItem.title} />
        {renderDescription()}
      </CardActionArea>
      {renderButton()}
    </Card>
  );
};

export default PageItemTemplate;
