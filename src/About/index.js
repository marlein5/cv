import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const About = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>about</div>
      <div>
        <a href="https://medium.com/@josfranco">medium: @josfranco</a>
      </div>
      <div>
        <a href="https://github.com/PepeFranco">github: @pepefranco</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
          linkedin: José Franco
        </a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(About);
