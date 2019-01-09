import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Education = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.pink}>
          {cv.education.title.substring(0, 3)}
        </span>
        {cv.education.title.substring(3, cv.education.title.length)}
      </div>
      {cv.education.items.map(item => {
        return (
          <div className={classes.item}>
            <div className={classes.itemLeft}>{item.date}</div>
            <div className={classes.itemRight}>
              <span className={classes.itemTitle}>{item.title}</span>
              <div className={classes.itemContent}>
                <div>{item.content}</div>
                {item.subContent && <div>{item.subContent}</div>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default injectSheet(styles)(Education);
