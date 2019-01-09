import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const About = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>{cv.about.title}</div>
      {cv.about.items.map(item => {
        return (
          <div key={item.text}>
            <a href={item.url}>{item.text}</a>
          </div>
        );
      })}
    </div>
  );
};

export default injectSheet(styles)(About);
