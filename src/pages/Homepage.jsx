import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You Travel The World.
          <br />
          Worldwise keeps track of your adventure.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
