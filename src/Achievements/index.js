import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Achievements = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>logros</div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>2017</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>Coolaborador de Open Source</span>
          <div className={classes.itemContent}>Trabajado en......</div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2017</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Presentador en de Facebook Developer Circles
            </span>
            <div className={classes.itemContent}>Trabajado en......</div>
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2011-2014</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Finalista anual 3 años de Microsoft Imagine Cup México
            </span>
            <div className={classes.itemContent}>Trabajado en......</div>
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2012</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Presidente de Sociedad de Alumnos de Tecnología
            </span>
            <div className={classes.itemContent}>Trabajado en......</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Achievements);
