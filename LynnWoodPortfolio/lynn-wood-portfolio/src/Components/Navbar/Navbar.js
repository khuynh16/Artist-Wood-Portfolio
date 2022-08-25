import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={
            isNavExpanded
              ? styles.container && styles.expanded
              : styles.container
          }
        >
          <Link to="/about">
            <button>About</button>
          </Link>

          <Link to="/gallery">
            <button>Gallery</button>
          </Link>

          <Link to="/exhibitions">
            <button>Exhibitions</button>
          </Link>

          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
