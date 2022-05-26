import React, { useState } from "react";
import classes from "../../../styles/Session.module.sass";
import Grid from "../../components/Grid/Grid";
import Popup from "../../components/Popup/Popup";

const Session = ({ collection, user }) => {
  console.log("[col1]", collection);
  const response = collection.collection;
  console.log("[col2]", collection);
  const [displayPU, setDisplayPU] = useState(false);
  const [currImg, setCImg] = useState(null);
  const images = response.posts;
  console.log("[IMAGES]", images, currImg);
  collection = response.collection;

  const popItUp = (e, pos) => {
    e.preventDefault();
    setCImg(pos);
    //if(images){
    //setCImg(images[pos])
    //}
    setDisplayPU(true);
  };
  const popDown = (e) => {
    e.preventDefault();
    console.log("[DOOOOWN]");
    setDisplayPU(false);
  };
  const next = (e) => {
    console.log("NEXT");
    e.preventDefault();
    if (currImg === images.length - 1) {
      setCImg(0);
    } else {
      setCImg((currImg) => currImg + 1);
    }
  };

  const previous = (e) => {
    console.log("PREV");
    e.preventDefault();
    if (currImg === 0) {
      setCImg(images.length - 1);
    } else {
      setCImg((currImg) => currImg - 1);
    }
  };

  return (
    <>
      <>
        <h2 className={classes.h2}> {collection.title} </h2>
        <p className={classes.text}> {collection.description}</p>
        <Grid
          type="images"
          click={(e, pos) => {
            console.log("[clock]", e, pos);
            popItUp(e, pos);
          }}
          elements={images}
        />
      </>
      <Popup
        image={images ? images[currImg] : null}
        display={displayPU}
        popDown={popDown}
        next={next}
        previous={previous}
      />
    </>
  );
};
export async function getServerSideProps({ query }) {
  // Fetch data from external API
  console.log("[QUERY]", query);
  const res = await fetch(
    process.env.API_URL + "/collection/" + query.sessionid
  );
  const res2 = await fetch(process.env.API_URL + "/user/" + query.userId);
  const collection = await res.json();
  const user = await res2.json();

  return { props: { collection, user } };
}

export default Session;
