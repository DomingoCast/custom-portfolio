import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Grid.module.sass";
import elements from "../assets/database/sessions";

const Home: NextPage = () => {
  const elementsHtml = elements.map((element, index) => (
    <Link
      className={styles.sessionLink}
      href={`/session/${element.path}`}
      key={index}
    >
      <div className={styles.session}>
        <p className={styles.name}>{element.name}</p>
        <div className={styles.mask} />
        <Image className={styles.element} src={element.preview} />
      </div>
    </Link>
  ));
  return <div className={styles.container}>{elementsHtml}</div>;
};

export default Home;
