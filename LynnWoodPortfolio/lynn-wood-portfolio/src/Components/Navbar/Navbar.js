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
