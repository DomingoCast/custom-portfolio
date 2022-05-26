import Image from "next/image";
import Link from "next/link";
import styles from "./Grid.module.sass";
import { useRouter } from "next/router";

const Home = ({ sessions }) => {
  if (sessions.collections) {
    const elementsHtml = sessions.collections.map((collection, index) => (
      <Link
        className={styles.sessionLink}
        href={`/session/${collection.id}`}
        key={index}
      >
        <div className={styles.session}>
          <p className={styles.name}>{collection.title}</p>
          <div className={styles.mask} />
          <img
            className={styles.element}
            src={"http://localhost:8080/image/" + collection.thumbnail}
          />
        </div>
      </Link>
    ));
    return <div className={styles.container}>{elementsHtml}</div>;
  }
  return <div className={styles.container}>There's no such user</div>;
};

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const res = await fetch(
    process.env.API_URL + "/collection/user/" + query.userId
  );
  const sessions = await res.json();

  // Pass data to the page via props
  return { props: { sessions } };
}
export default Home;
