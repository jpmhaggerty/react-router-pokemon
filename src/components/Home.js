import "./App.css";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";

function Home({ pokemonArray }) {
  //still need to collect the first ten items from the array and process

  // //develop new image, etc. array from pokemon API
  // const images = [
  //   {
  //     label: {pokemonName},
  //     imgPath:
  //     `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`,
  //   },
  //   {
  //     label: {pokemonName},
  //     imgPath:
  //     `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`,
  //   },
  //   {
  //     label: {pokemonName},
  //     imgPath:
  //     `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`,
  //   },
  //   {
  //     label: {pokemonName},
  //     imgPath:
  //     `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`,
  //   },
  // ];

  if (pokemonArray !== null) {
    console.log(
      "Pokemon Array inside home: ",
      { pokemonArray }.pokemonArray.results
    );
  }

  let images = [
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];
  if (pokemonArray !== null) {
    images = { pokemonArray }.pokemonArray.results;
  }
  //console.log("Pokemon array 2:", pokemonArray);

  // `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Professor Haggerty's Pokédex</h1>
      </header>
      <p>Pokémon!</p>

      {/* should probably add buttons to the cards to set favorites- use heart/ thumb icon?  */}
      <Grid container justifyContent="center" spacing={2}>
        <SwipeableTextMobileStepper images={images} />
      </Grid>
      <SpacingGrid images={images} />
    </div>
  );
}

export default Home;
