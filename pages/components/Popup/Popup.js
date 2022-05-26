import React from "react";

import classes from "./Popup.module.sass";

const popup = (props) => {
  console.log("[PROPS2]", props);
  const content = props.image ? (
    <div
      className={
        classes.backdrop + " " + (props.display ? null : classes.hidden)
      }
    >
      <a href="#" className={classes.backLink} onClick={props.popDown} />
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={"http://localhost:8080/image/" + props.image.thumbnail}
          alt="expanded superpwer"
          layout="fill"
        />
        <a
          href="#"
          className={classes.link + " " + classes.left}
          onClick={props.previous}
        />
        <a
          href="#"
          className={classes.link + " " + classes.right}
          onClick={props.next}
        />
        <a href="#" className={classes.back} onClick={props.popDown}>
          back
        </a>
      </div>
    </div>
  ) : null;
  return content;
};

export default popup;
