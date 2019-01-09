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
import en from "./en";
import es from "./es";

class App extends React.Component {
  constructor() {
    super();
    this.state = { language: "es", printing: false };
  }

  render() {
    const { classes } = this.props;
    const { language } = this.state;
    const cv = language === "en" ? en : es;
    return (
      <div className={classes.root}>
        <Header cv={cv} />
        <div className={classes.content}>
          <div className={classes.leftColumn}>
            <About cv={cv} />
            <Languages cv={cv} />
            <Programming cv={cv} />
          </div>
          <div className={classes.rightColumn}>
            <Experience cv={cv} />
            <Education cv={cv} />
            <Achievements cv={cv} />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
