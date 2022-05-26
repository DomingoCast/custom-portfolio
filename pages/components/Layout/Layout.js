import React, { useState, useEffect, componentDidMount } from "react";

import classes from "./Layout.module.sass";

import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";
import axios from "axios";

const Layout = ({ children }) => {
  //console.log(props, window.location.href)
  //const [location, setLocation ] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1])
  //const [location, setLocation ] = useState(null)
  //const [navState, setNavState] = useState(classes.extended)
  const [navShrink, setNavShrink] = useState(false);
  const [disMode, setDM] = useState(null);
  const [disMenu, setDisMenu] = useState(false);
  const [disUser, setDisUser] = useState(null);
  const query = useRouter().query;

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("mobile");
      setDM("mobile");
    } else {
      console.log("desktop");
      setDM("desktop");
    }
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 50 && !navShrink) {
        setNavShrink(true);
      } else if (window.scrollY <= 50 && navShrink) {
        setNavShrink(false);
      }
    });
    axios.get("http://localhost:8080/user/" + query.userId).then((res) => {
      const user = res.data.user;
      console.log(user);
      setDisUser(user);
    });
  }, []);

  const handleMenu = (e) => {
    if (e) {
      e.preventDefault();
    }

    console.log("MENU", disMenu);
    if (disMenu) {
      setDisMenu(false);
    } else {
      setDisMenu(true);
    }
  };

  return (
    <div className={classes.container}>
      <Navbar
        mode={disMode}
        shrink={navShrink}
        disMenu={disMenu}
        handleMenu={(e) => handleMenu(e)}
        user={disUser}
      />
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Layout;
