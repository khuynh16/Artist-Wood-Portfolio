import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={
            isNavExpanded
              ? styles.expanded
              : location.pathname === "/"
              ? styles.hiddenAnimationCSS + " " + styles.container
              : styles.container
          }
        >
          <Link to="/about">
            <button
              className={
                location.pathname === "/about" ? styles.activeRoute : ""
              }
            >
              About
            </button>
          </Link>

          <Link to="/gallery">
            <button
              className={
                location.pathname === "/gallery" ? styles.activeRoute : ""
              }
            >
              Gallery
            </button>
          </Link>

          <Link to="/exhibitions">
            <button
              className={
                location.pathname === "/exhibitions" ? styles.activeRoute : ""
              }
            >
              Exhibitions
            </button>
          </Link>

          <Link to="/contact">
            <button
              className={
                location.pathname === "/contact" ? styles.activeRoute : ""
              }
            >
              Contact
            </button>
          </Link>
        </div>
        <button
          className={
            location.pathname === "/"
              ? styles.hamburgerHomePageStyling
              : styles.hamburgerNonHomePageStyling
          }
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
