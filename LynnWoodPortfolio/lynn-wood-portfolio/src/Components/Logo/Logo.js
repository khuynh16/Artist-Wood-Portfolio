import styles from "./Logo.module.css";
import { ReactComponent as Logo } from "../../Assets/Images/Logo.svg";
import { useNavigate } from "react-router-dom";

const ReusableLogo = () => {
  const navigate = useNavigate();

  return (
    <Logo alt={"home"} className={styles.logo} onClick={() => navigate("/")} />
  );
};

export default ReusableLogo;
