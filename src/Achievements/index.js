import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Achievements = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.orange}>log</span>
        ros
      </div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>2017</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>Coolaborador de Open Source</span>
          <div className={classes.itemContent}>
            Traducción de la{" "}
            <a href="https://jestjs.io/es-ES/">
              documentación de Jest a español
            </a>
            . Trabajado en{" "}
            <a href="https://github.com/coralproject/talk">
              Coral Project Talk
            </a>
            .
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2017</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Presentador en de Facebook Developer Circles
            </span>
            <div className={classes.itemContent}>
              Presentación de Unit testing en aplicaciones ReactJS en un meetup.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2011-2014</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Finalista anual 3 años de Microsoft Imagine Cup México
            </span>
            <div className={classes.itemContent}>
              Diseño y desarrollo de aplicaciones web y mobiles en plataformas
              Microsoft. Proyectos que buscaban resolver diferentes problemas
              sociales, como emergencias medicas, incrementar la donación
              voluntaria de sangre y reducir el uso de energia en oficinas.
              Herramientas usadas incluyen SDK de Windows Phone, .NET MVC &
              Azure.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2012</div>
        <div className={classes.itemRight}>
          <div className={classes.itemRight}>
            <span className={classes.itemTitle}>
              Presidente de Sociedad de Alumnos de Tecnología
            </span>
            <div className={classes.itemContent}>
              Organización de converencias para compañeros estudiantes con
              presentadores de Google, IBM, Apple & Microsoft.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Achievements);
