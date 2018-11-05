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
          <span className={classes.itemSubTitle}> Desarrollador Senior</span>
          <div className={classes.itemContent}>
            Desarrollo de <a href="https://www.occ.com.mx/">OCC Mundial</a> en
            ReactJS. Cambio de URLs en el sitio principal de búsqueda para
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
            Desarrollo de <a href="http://hk.jobsdb.com/">JobsDB Hong Kong</a>{" "}
            en ReactJS. Líder técnico de la página de vacante. Sitio
            implementado en arquitectura escalable en AWS EC2 & Lambda para
            múltiples países/marcas en Asia.
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
            Desarrollo de aplicación web Nanodrop de Thermofisher cloud. Permite
            a científicos subir archivos y visualizarlos gráficamente. Sitio
            construido server-less en AWS Java Lambdas, DynamoDB, Angular &
            Jenkins para deployment.
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
