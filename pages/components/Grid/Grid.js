import React from "react";
import classes from "./Grid.module.sass";

import { Image } from "next/Image";
import { Link } from "next/link";

const grid = (props) => {
  console.log("[PROPS]", props);
  let elements;
  if (props.type === "images") {
    if (props.elements)
      elements = props.elements.map((element, index) => {
        console.log(element.thumbnail);
        return (
          <div className={classes.image}>
            <a
              href="#"
              onClick={(event) => props.click(event, index)}
              key={index}
              className={classes.link}
            >
              <img
                className={classes.element}
                src={process.env.API_URL + "/image/" + element.thumbnail}
              />
            </a>
          </div>
        );
      });
    else {
      elements = <div className={classes.image}></div>;
    }
  } else if (props.type === "sessions") {
    elements = props.elements.map((element, index) => (
      <Link
        className={classes.sessionLink}
        to={`/session/${element.path}`}
        key={index}
      >
        <div className={classes.session}>
          <p className={classes.name}>{element.name}</p>
          <div className={classes.mask} />
          <Image className={classes.element} src={element.preview} />
        </div>
      </Link>
    ));
  } else {
    elements = props.elements.map((element) => (
      <div className={classes.element}> {element}</div>
    ));
  }
  return <div className={classes.container}>{elements}</div>;
};

export default grid;
