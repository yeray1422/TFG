import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const HomeItem = () => {
  return (
    <Card>
      <CardActionArea onClick={() => console.log("CardActionArea")}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200/300"
          alt="prueba"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Titulo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            nemo eveniet molestiae architecto. Dignissimos iusto rerum eligendi
            dolore commodi deserunt accusamus! Itaque reiciendis quae harum
            animi tenetur repellat necessitatibus sequi?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeItem;
