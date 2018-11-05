import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.name}>José Franco</div>
      <div className={classes.contact}>
        Desarrollador web -{" "}
        <a href="mailto:jose.franco@outlook.com" className={classes.mail}>
          jose.franco@outlook.com
        </a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
