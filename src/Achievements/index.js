import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Achievements = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.orange}>
          {cv.achievements.title.substring(0, 3)}
        </span>
        {cv.achievements.title.substring(3, cv.achievements.title.length)}
      </div>
      {cv.achievements.items.map(item => {
        return (
          <div className={classes.item} key={item.title}>
            <div className={classes.itemLeft}>{item.date}</div>
            <div className={classes.itemRight}>
              <span className={classes.itemTitle}>{item.title}</span>
              <div
                className={classes.itemContent}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default injectSheet(styles)(Achievements);
