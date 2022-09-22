import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArtworksData from "../Artworks/Artworks";
import { useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
  const [selectedArtworkName, setSelectedArtworkName] = useState("");

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
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={artwork.url}
              alt={artwork.name}
              data-fancybox={
                selectedArtworkName === artwork.name ? "gallery" : ""
              }
              data-caption={
                "<h2 style='margin-top: 30px; font-style: italic'>" +
                artwork.name +
                "<h2 style='margin-top: 30px'>" +
                "<h3>" +
                artwork.year +
                "<h3>" +
                "<h3>" +
                artwork.medium +
                "<h3>" +
                "<h3>" +
                artwork.dimension +
                "<h3>"
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
    </>
  );
};

export default Card;
