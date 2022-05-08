import type { NextPage } from "next";

import classes from "../styles/AboutMe.module.sass";

import nerea from "./assets/nerea-about.png";

import Image from "next/image";

const AboutMe: NextPage = () => {
  console.log("[NEREA]", nerea);
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image
          className={classes.img}
          src={nerea}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className={classes.p}>
        Soy una fotografa de elche. Formerly known as Nerelx. Tengo un perro,
        dos gatos y una paloma que me lo caga todo pero la quiero de todas
        formas. Soy super heavy y no me gustan las relaciones serias
      </p>
    </div>
  );
};

export default AboutMe;
