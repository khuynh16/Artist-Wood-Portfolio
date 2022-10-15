import Navbar from "../../Components/Navbar/Navbar";
import ReusableLogo from "../../Components/Logo/Logo";
import styles from "./About.module.css";
import about_pic from "../../Assets/Images/About.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <ReusableLogo />
      <div className={styles.outerContainer}>
        <div className={styles.banner}>
          <img
            className={styles.picture}
            src={about_pic}
            alt={"looking towards the side of sunset"}
          ></img>
          <p className={styles.bannerText}>The Story and Journey.</p>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.h1TagStyling}>&nbsp;Artist Statement:</span>
          </h1>

          <p className={styles.artistStatement}>
            Lynn Nguyen's artwork combines technology and sculpture to create
            interactive works that transcend the boundaries of either medium.
            Lynn is inspired by the natural beauty of wood, and draws on her
            background in the sciences to create sculptures that are interactive
            and kinetic and invoke the feeling of living things as they move.
            Applying her technical knowledge to wood sculpture, Lynn utilizes
            AR, different types of sensors, and laser cutting to achieve her
            artistic visions.
            <br></br>
            <br></br>
            Lynn takes inspiration from the world around her including visiting
            art museums, watching tv shows, and listening to art talks. Being
            amazed by the Studio Ghibli films, Lynn would love to create
            artworks that engage audiences physically and through the magical
            virtual world of Digital Media.
          </p>
          <h1>
            <span className={styles.h1TagStyling}>&nbsp;Biography:</span>
          </h1>
          <p className={styles.biography}>
            My journey to art has not been traditional. It was always my dream
            to combine art and technology, but my family did not approve of my
            ambition. To please them, I studied to become a Surgical Technician
            while secretly taking art courses to pursue my happiness. After my
            first year studying as a surgical tech, I knew I had to make the
            decision to pursue what I love — the studio arts.
            <br></br>
            <br></br>
            In my emerging art career, I have served as an assistant for
            artists: Foon Sham and Molleye Bendell.
            <br></br>
            <br></br>
            Selected exhibitions include:
            <br></br>
            <br></br>
            <br></br>
            <h4>2021:</h4>
            <br></br>
            <br></br>
            <h4>2022:</h4>
            <br></br>
            <br></br>
          </p>
          <div className={styles.biography}></div>
        </div>
      </div>
    </>
  );
};

export default About;
