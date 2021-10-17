import "./App.css";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";

function Favorites({ pokemonArray, onFavoriteClick }) {

  return (
    <div className="Favorites">
      <header className="Favorites-header">
        <h1>Pokédex A-Team</h1>
      </header>
      <p>Pokémon!</p>

      <Grid container justifyContent="center" spacing={2}>
        <SwipeableTextMobileStepper pokemonArray={pokemonArray} />
      </Grid>
      <SpacingGrid pokemonArray={pokemonArray} onFavoriteClick={onFavoriteClick} />
    </div>
  );
}

export default Favorites;
