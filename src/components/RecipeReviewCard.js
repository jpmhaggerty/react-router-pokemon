import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ pokemon, onFavoriteClick }) {
  let [expanded, setExpanded] = React.useState(false);
  let colorFav = "gray";

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleFavoriteClick() {
    let temp = { pokemon }.pokemon.favorites
      ? (colorFav = "pinK")
      : (colorFav = "gray");
  }

  handleFavoriteClick();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {pokemon.name.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={`${pokemon.name.toUpperCase()}!`}
      />
      <CardMedia
        component="img"
        height="194"
        image={pokemon.sprites.front_default}
        alt="Pokemon Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Type: ${pokemon.types[0].type.name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`ID: ${pokemon.id}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Height: ${pokemon.height}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Weight: ${pokemon.weight}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          id="favorite-icon"
          onClick={(event) => {
            handleFavoriteClick();
            onFavoriteClick(event, { pokemon });
          }}
          aria-label="add to favorites"
          style={{ color: colorFav }}
        >
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            paragraph
          >{`Move: ${pokemon.moves[0].move.name}`}</Typography>
          <Typography
            paragraph
          >{`Move: ${pokemon.moves[1].move.name}`}</Typography>
          <Typography
            paragraph
          >{`Move: ${pokemon.moves[2].move.name}`}</Typography>
          <Typography
            paragraph
          >{`Move: ${pokemon.moves[3].move.name}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
