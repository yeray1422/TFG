import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>No hemos encontrado la página que estás buscando.</h2>
      <p>
        Puede que todavía no esté implementada o que hayas buscado algo erróneo.
      </p>
      <Link to={"/"}>Volver a la página de inicio</Link>
    </div>
  );
};

export default NotFound;
