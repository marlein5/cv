import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";

const Header = ({ classes, cv }) => {
  return (
    <div className={classes.root}>
      <div className={classes.name}>{cv.header.name}</div>
      <div className={classes.contact}>
        {cv.header.jobTitle} -{" "}
        <a href={`mailto:${cv.header.mail}`} className={classes.mail}>
          {cv.header.mail}
        </a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
