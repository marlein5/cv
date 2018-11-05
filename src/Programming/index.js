import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Programming = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>tecnologías</div>
      <div>Javascript</div>
      <div>React</div>
      <div>AWS EC2</div>
      <div>Lambda</div>
      <div>CloudFront</div>
      <div>C#</div>
      <div>ASP.NET MVC,</div>
      <div>Oracle</div>
      <div>PL/SQL</div>
    </div>
  );
};

export default injectSheet(styles)(Programming);
