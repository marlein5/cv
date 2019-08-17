import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Experience = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.blue}>
          {cv.experience.title.substring(0, 3)}
        </span>
        {cv.experience.title.substring(3, cv.experience.title.length)}
      </div>
      {cv.experience.items.map((item, index) => {
        return (
          <div className={classes.item} key={`${item.title}-${item.date}`}>
            <div className={classes.itemLeft}>{item.date}</div>
            <div className={classes.itemRight}>
              <span className={classes.itemTitle}>{item.title}</span>
              <span className={classes.itemSubTitle}>{item.subtitle}</span>
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

export default injectSheet(styles)(Experience);
