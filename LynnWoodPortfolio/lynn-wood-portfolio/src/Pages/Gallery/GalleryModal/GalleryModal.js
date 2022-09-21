import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import styles from "./GalleryModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const GalleryModal = (props) => {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.selectedArtworkName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            2022
            <br />
            Wood
            <br />
            20" x 24"
          </Typography>
          <Typography className={styles.container} sx={{ mt: 2 }}>
            This is the container.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default GalleryModal;
