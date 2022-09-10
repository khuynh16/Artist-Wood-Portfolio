import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArtworksData from "../Artworks/Artworks";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <>
      {ArtworksData.map((artwork) => (
        <MuiCard
          sx={{ maxWidth: 345 }}
          key={artwork.name}
          className={styles.card}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={artwork.url}
              alt={artwork.name}
            />
            <CardContent className={styles.cardTextBody}>
              <Typography
                className={styles.cardText}
                variant="h6"
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
