import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Languages = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>{cv.languages.title}</div>
      {cv.languages.items.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default injectSheet(styles)(Languages);
