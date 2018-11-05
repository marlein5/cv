import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Education = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>educación</div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>2014</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            Ingeniería en Tecnologías Computacionales.
          </span>
          <div className={classes.itemContent}>
            Tecnológico de Monterrey. Cuernavaca, México.
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2014</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>Programa de investigación</span>
          <div className={classes.itemContent}>
            <div>University of Notre Dame. Indiana, EEUU.</div>
            <div>
              Trabajado en un plug-in para Eclipse para la visualización de
              código como gráficas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Education);
