import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise inc.
      </footer>
    </div>
  );
}

export default Sidebar;
