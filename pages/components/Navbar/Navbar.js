import Link from "next/link";
import Image from "next/image";
import Instagram from "../../assets/instagram.svg";

import styles from "./Navbar.module.sass";

import leftArrow from "../../assets/svg/left-arrow.png";

const navbar = (props) => {
  let currentStyle;
  console.log("[SOY GILIPOLLAAAAAAS]", props.user);
  let navContent;
  if (props.mode === "desktop") {
    currentStyle = {
      color: "var(--grey-3)",
      borderBottom: "1px solid var(--grey-3)",
      paddingBottom: ".3em",
      marginBottom: "-.3em",
    };
    navContent = (
      <nav className={styles.nav + " " + (props.shrink ? styles.shrink : null)}>
        <Link href="/" className={styles.link}>
          <h1 className={styles.h1}>{user.name}</h1>
        </Link>
        <div className={styles.links}>
          <Link activeStyle={currentStyle} href="/" className={styles.link}>
            Home
          </Link>
          <Link
            activeStyle={currentStyle}
            href="/about-me"
            className={styles.link}
          >
            About me
          </Link>
          <Link
            activeStyle={currentStyle}
            href="/contact"
            className={styles.link}
          >
            Contact
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/nereamolina__/"
            className={styles.link + " " + styles.insta}
          >
            <Image className={styles.svg} src={Instagram} alt="INSTAGRAM" />
          </a>
        </div>
      </nav>
    );
  } else {
    currentStyle = {
      color: "var(--grey-1)",
      borderBottom: "1px solid var(--grey-1)",
      paddingBottom: ".3em",
      marginBottom: "-.3em",
    };
    navContent = (
      <>
        <nav
          className={styles.nav + " " + (props.shrink ? styles.shrink : null)}
        >
          <Link
            href={"/" + (props.user ? props.user.id : "")}
            className={styles.link}
          >
            <h1 className={styles.h1}>{props.user ? props.user.name : ""}</h1>
          </Link>
          <a
            href="#"
            onClick={props.handleMenu}
            className={
              styles.ham +
              " " +
              (props.mode === "desktop" ? styles.hidden : null)
            }
          >
            <div className={styles.hamContent} />
          </a>
        </nav>
        <div
          className={
            /*styles.links+' '+*/ styles.menu +
            " " +
            (props.disMenu ? null : styles.menuHidden)
          }
        >
          <a href="#" onClick={props.handleMenu} className={styles.arrowLink}>
            <Image src={leftArrow} className={styles.arrow} />
          </a>
          <div className={styles.links}>
            <Link
              //   activeStyle={currentStyle}
              onClick={() => props.handleMenu(null)}
              href="/"
              className={styles.link}
            >
              Home
            </Link>
            <Link
              //   activeStyle={currentStyle}
              onClick={() => props.handleMenu(null)}
              href="/about-me"
              className={styles.link}
            >
              About me
            </Link>
            <Link
              //   activeStyle={currentStyle}
              href="/contact"
              onClick={() => props.handleMenu(null)}
              className={styles.link}
            >
              Contact
            </Link>
          </div>
        </div>
      </>
    );
  }
  return <>{navContent}</>;
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

export default navbar;
