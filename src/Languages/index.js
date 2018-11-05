import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Languages = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>languages</div>
      <div>english</div>
      <div>native spanish</div>
      <div>medium portuguese</div>
    </div>
  );
};

export default injectSheet(styles)(Languages);
