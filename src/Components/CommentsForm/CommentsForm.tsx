import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";

const CommentsForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log({ name, comment });
  };

  return (
    <Card sx={{ m: "0 1rem 1rem 1rem" }}>
      <CardHeader title="Añade tus comentarios" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          En esta sección podrás añadir de forma anónima cualquier comentario,
          errores que encuentres en la aplicación y/o posibles mejoras
        </Typography>
        <form onSubmit={submitHandler}>
          <div>
            <TextField
              label="Nombre"
              placeholder="Introduce tu nombre si quieres"
              maxRows={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Comentario"
              placeholder="Introduce aquí tu comentario"
              multiline
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
            <Button color="info" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentsForm;
