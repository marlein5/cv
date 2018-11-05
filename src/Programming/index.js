import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Programming = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>programming</div>
      <div>Javascript,</div>
      <div>React,</div>
      <div>AWS EC2,</div>
      <div>Lambda,</div>
      <div>CloudFront,</div>
      <div>C#, ASP.NET MVC,</div>
      <div>Oracle, PL/SQL</div>
    </div>
  );
};

export default injectSheet(styles)(Programming);
