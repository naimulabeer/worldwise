import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise inc.
      </footer>
    </div>
  );
}

export default Sidebar;
