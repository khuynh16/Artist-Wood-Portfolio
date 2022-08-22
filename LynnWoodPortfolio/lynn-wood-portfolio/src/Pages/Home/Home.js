import styles from "./Home.module.css";
import Layout from "../Layout/Layout";
import main_page_pic from "./../../Assets/Images/Bud.jpg";

const Home = () => {
  return (
    <>
      <Layout />
      <div className={styles.container}>
        <img
          className={styles.mainPic}
          src={main_page_pic}
          alt={"front page artwork"}
        ></img>
        <div className={styles.shadow} />
      </div>
      <div className={styles.artistName}>
        <span className={styles.firstName}>Lynn</span>
        <span>Nguyen</span>
      </div>
      <div className={styles.artistPhrase}>
        <span>Arist.</span>
        <span>Designer.</span>
        <span>Wood Sculptor.</span>
      </div>
    </>
  );
};

export default Home;
