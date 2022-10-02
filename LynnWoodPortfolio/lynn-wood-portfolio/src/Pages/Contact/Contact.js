import Navbar from "../../Components/Navbar/Navbar";
import ReusableLogo from "../../Components/Logo/Logo";
import styles from "./Contact.module.css";
import contact_pic from "../../Assets/Images/Contact.jpg";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ReusableLogo />
      <div className={styles.outerContainer}>
        <div className={styles.contactTitle}>Let's Chat!</div>
        <div className={styles.innerContainer}>
          <img
            className={styles.picture}
            src={contact_pic}
            alt={"working on beginning_ending project"}
          ></img>
          <form className={styles.form}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="firstname"></input>
            <label for="email">Email Address:</label>
            <input type="text" id="email" name="email"></input>
            <label for="email">Subject:</label>
            <input type="text" id="subject" name="subject"></input>
            <label for="email">Message:</label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="10"
            ></textarea>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Lucida Sans Regular",
                fontWeight: "bold",
                fontSize: "1rem",
                mt: "1rem",
              }}
            >
              Submit Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
