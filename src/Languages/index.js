import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Languages = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>lenguajes</div>
      <div>inglés</div>
      <div>portugues</div>
    </div>
  );
};

export default injectSheet(styles)(Languages);
