import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface AlertDialogProps {
  open: boolean;
  title: string;
  message: string;
  accept: () => void;
}

const AlertDialog = (props: AlertDialogProps) => {
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.accept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
