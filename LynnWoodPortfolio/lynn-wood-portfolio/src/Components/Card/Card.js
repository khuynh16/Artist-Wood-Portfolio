import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, DialogContent } from "@mui/material";
import ArtworksData from "../Artworks/Artworks";
import ImageViewer from "../ImageViewer/ImageViewer";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./Card.module.css";

import GalleryModal from "../../Pages/Gallery/GalleryModal/GalleryModal";

const Card = () => {
  const [selectedArtworkName, setSelectedArtworkName] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {ArtworksData.map((artwork) => (
        <MuiCard
          sx={{ maxWidth: 345 }}
          key={artwork.url}
          className={styles.card}
        >
          <CardActionArea
            onClick={() => {
              setSelectedArtworkName(artwork.name);
              handleOpen();
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={artwork.url}
              alt={artwork.name}
              // data-fancybox={
              //   selectedArtworkName === artwork.name ? "gallery" : ""
              // }
              data-caption={
                artwork.year +
                "<br>" +
                artwork.medium +
                "<br>" +
                artwork.dimension
              }
              //https://www.npmjs.com/package/react-image-gallery for the gallery and put in modal..
            />
            <CardContent className={styles.cardTextBody}>
              <Typography
                className={styles.cardText}
                variant="h5"
                component="div"
                align="center"
                fontFamily="Alegreya Sans"
              >
                {artwork.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </MuiCard>
      ))}
      <GalleryModal
        selectedArtworkName={selectedArtworkName}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default Card;
