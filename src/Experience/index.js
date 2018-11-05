import React from "react";
import injectSheet from "react-jss";
import styles from "../rightItemsStyles";

const Experience = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.blue}>exp</span>
        eriencia
      </div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>2018 - Actual</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            OCC Mundial. Querétaro, México.
          </span>
          <span className={classes.itemSubTitle}> Desarrollador senior</span>
          <div className={classes.itemContent}>
            Trabajado en sitios ReactJS para buscadores de trabajo. En un
            proyecto para cambiar URLs en el sitio principal de búsqueda para
            mejorar ranking en SEO. Construcción y mantenimiento de pipeline
            CI/CD para mejorar el tiempo de deployment a producción. Definición
            de estandarés de código y pruebas, así como implementación de
            herramientas que mantienen dichos estandáres.
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2018</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>SEEK. Melbourne, Australia.</span>
          <span className={classes.itemSubTitle}> Desarrollador Senior</span>
          <div className={classes.itemContent}>
            Desarrollo de sitio en ReactJS para la busqueda de empleos. Lider
            técnico encargado de la página de vacante. Sitio implementado en
            arquitectura escalable para múltiples paises/marcas en Asia.
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2016</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            Thermofisher Scientific. Tijuana, México.
          </span>
          <span className={classes.itemSubTitle}> Desarrollador Senior</span>
          <div className={classes.itemContent}>
            Desarrollo de aplicación web Nanodrop de Thermofisher cloud. Misma
            que permite a cientificos subir archivos y visualizarlos
            gráficamente. Sitio construido server-less en AWS Java Lambdas.
            DynamoDB para datos. Angular en freont-end & Jenkins para
            deployment.
          </div>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.itemLeft}>2015</div>
        <div className={classes.itemRight}>
          <span className={classes.itemTitle}>
            Oracle. Guadalajara, México.
          </span>
          <span className={classes.itemSubTitle}>
            Business Intelligence Analyst
          </span>
          <div className={classes.itemContent}>
            Mejoras en reportes OBIEE. Optimización de tiempos de procesamiento
            de reportes en hasta 90% a través de refactorización de código
            PL/SQL.
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Experience);
