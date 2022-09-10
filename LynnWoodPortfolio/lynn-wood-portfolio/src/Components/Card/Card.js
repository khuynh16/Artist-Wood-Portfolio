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
        <MuiCard sx={{ maxWidth: 345 }} key={artwork.name}>
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
                gutterBottom
                variant="h5"
                component="div"
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
