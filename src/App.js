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

class App extends React.Component {
  constructor() {
    super();
    this.state = { language: "en", printing: false };
  }

  render() {
    const { classes } = this.props;
    const { language } = this.state;
    return (
      <div className={classes.root}>
        <Header language={language} />
        <div className={classes.content}>
          <div className={classes.leftColumn}>
            <About language={language} />
            <Languages language={language} />
            <Programming language={language} />
          </div>
          <div className={classes.rightColumn}>
            <Experience language={language} />
            <Education language={language} />
            <Achievements language={language} />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
