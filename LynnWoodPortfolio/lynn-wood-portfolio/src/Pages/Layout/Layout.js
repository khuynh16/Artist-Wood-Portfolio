import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/gallery">Gallery</Link>
          </button>
          <button>
            <Link to="/exhibitions">Exhibitions</Link>
          </button>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
