import Navbar from "../../Components/Navbar/Navbar";
import ReusableLogo from "../../Components/Logo/Logo";
import styles from "./Contact.module.css";
import contact_pic from "../../Assets/Images/Contact.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");

  const validSubmission = (event) => {
    event.preventDefault();
    console.log("Here!");
    setFormSubmitted(!formSubmitted);
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

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
          <form
            className={styles.form}
            style={{
              display: formSubmitted ? "none" : "",
            }}
            // action="https://formsubmit.co/lynn.clover1206@gmail.com"
            // method="POST"
            onSubmit={validSubmission}
          >
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={updateName}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required></input>
            </div>
            <div>
              <label htmlFor="email">Subject:</label>
              <input type="text" id="subject" name="subject" required></input>
            </div>
            <div>
              <label htmlFor="email">Message:</label>
              <textarea
                type="text"
                id="message"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Lucida Sans Regular",
                fontWeight: "bold",
                fontSize: "1.2rem",
                mt: "1rem",
                textTransform: "capitalize",
              }}
              type="submit"
              value="Submit"
            >
              Submit Message
            </Button>
          </form>
          <div
            className={styles.emailSubmissionMessage}
            style={{ display: !formSubmitted ? "none" : "flex" }}
          >
            Thank you for your email, {name}! <br></br>
            <br></br> I will get back to you soon!
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
