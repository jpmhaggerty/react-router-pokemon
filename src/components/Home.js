import "./App.css";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";

function Home({ pokemonArray, onFavoriteClick }) {

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Professor Haggerty's Pokédex</h1>
      </header>
      <p>Pokémon!</p>

      <Grid container justifyContent="center" spacing={2}>
        <SwipeableTextMobileStepper pokemonArray={pokemonArray} />
      </Grid>
      <SpacingGrid pokemonArray={pokemonArray} onFavoriteClick={onFavoriteClick} />
    </div>
  );
}

export default Home;
