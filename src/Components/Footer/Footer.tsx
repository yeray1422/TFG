import { Paper } from "@mui/material";
import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Paper className={styles.footer}>
      <p>
        *Los mapas marcados con un asterisco, sólo se puede completar el Easter
        Egg en grupo o tienen alguna condición
      </p>
      <p>En PC existe un mod que te permite hacerlos en solo</p>
    </Paper>
  );
};

export default Footer;
