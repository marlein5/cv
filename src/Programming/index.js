import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Programming = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>{cv.programming.title}</div>
      {cv.programming.items.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default injectSheet(styles)(Programming);
