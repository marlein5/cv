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
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { language: "en", printing: false };
  }

  render() {
    const { classes } = this.props;
    const { language } = this.state;
    const cv = language === "en" ? en : es;
    return (
      <div className={classes.root}>
        <Header cv={cv} />
        <div className={classes.flag}>
          <ReactFlagsSelect
            defaultCountry="GB"
            countries={["GB", "ES"]}
            customLabels={{ GB: "EN", ES: "ES" }}
            onSelect={option => {
              this.setState({ language: option === "GB" ? "en" : "es" });
            }}
          />
        </div>
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
