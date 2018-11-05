import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Experience = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>experiencia</div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>2018 - Actual</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            OCC Mundial. Querétaro, México.
          </span>
          <span className={classes.itemSubTitle}> Senior Developer</span>
          <div className={classes.itemContent}>Trabajado en......</div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2018</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>SEEK. Melbourne, Australia.</span>
          <span className={classes.itemSubTitle}> Desarrollador Senior</span>
          <div className={classes.itemContent}>Trabajado en......</div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2016</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            Thermofisher Scientific. Tijuana, México.
          </span>
          <span className={classes.itemSubTitle}> Desarrollador Senior</span>
          <div className={classes.itemContent}>Trabajado en......</div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2015</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            Oracle. Guadalajara, México.
          </span>
          <span className={classes.itemSubTitle}>
            {" "}
            Business Intelligence Analyst
          </span>
          <div className={classes.itemContent}>Trabajado en......</div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Experience);
