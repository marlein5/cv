import React from "react";
import injectSheet from "react-jss";
import Header from "./Header";
import About from "./About";
import Languages from "./Languages";
import Programming from "./Programming";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import styles from "./styles";

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <div className={classes.leftColumn}>
          <About />
          <Languages />
          <Programming />
        </div>
        <div className={classes.rightColumn}>
          <Experience />
          <Education />
          <Achievements />
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(App);
