import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArtworksData from "../Artworks/Artworks";

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
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
