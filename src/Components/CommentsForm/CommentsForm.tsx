import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comments from "../../Models/Comments";
import { postComment } from "../../Utils/APICalls";
import AlertDialog from "../UI/AlertDialog";

const CommentsForm = () => {
  const [nameField, setNameField] = useState("");
  const [commentField, setCommentField] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);
  const [formSubmited, setFormSubmited] = useState(false);
  const [formNotSubmited, setFormNotSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setFormIsValid(true);

    if (!commentField) {
      setFormIsValid(false);
      setIsLoading(false);
      return;
    }

    const comment: Comments = {
      id: uuidv4(),
      name: nameField || "anónimo",
      comment: commentField,
    };

    postComment(comment, setFormSubmited, setFormNotSubmited, setIsLoading);
  };

  return (
    <>
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
                label="Nombre (no obligatorio)"
                placeholder="Introduce tu nombre"
                maxRows={2}
                value={nameField}
                onChange={(e) => setNameField(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Comentario"
                placeholder="Introduce aquí tu comentario"
                multiline
                rows={6}
                value={commentField}
                onChange={(e) => setCommentField(e.target.value)}
              />
            </div>
            <div>
              <Button color="info" type="submit">
                Enviar
              </Button>
              {isLoading && <CircularProgress color="info" />}
            </div>
          </form>
        </CardContent>
      </Card>
      <AlertDialog
        open={!formIsValid}
        title="Error al enviar el formulario"
        message="Debes poner al menos un comentario para enviar el comentario."
        accept={() => setFormIsValid(true)}
      />
      <AlertDialog
        open={formSubmited}
        title="Gracias!"
        message="El comentario ha sido enviado satisfactoriamente."
        accept={() => setFormSubmited(false)}
      />
      <AlertDialog
        open={formNotSubmited}
        title="Algo ha ido mal..."
        message="Si el problema persiste, inténtelo de nuevo más tarde."
        accept={() => setFormNotSubmited(false)}
      />
    </>
  );
};

export default CommentsForm;
