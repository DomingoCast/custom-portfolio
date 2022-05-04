import React from "react";

import classes from "../styles/AboutMe.module.sass";

import Nerea from "./assets/nerea-about.png";
import Layout from "./components/Layout/Layout";

const aboutMe = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={Nerea} />
      </div>
      <p className={classes.p}>
        Soy una fotografa de elche. Formerly known as Nerelx. Tengo un perro,
        dos gatos y una paloma que me lo caga todo pero la quiero de todas
        formas. Soy super heavy y no me gustan las relaciones serias
      </p>
    </div>
  );
};

export default aboutMe;
