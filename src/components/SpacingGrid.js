import * as React from "react";
import Grid from "@mui/material/Grid";
import RecipeReviewCard from "./RecipeReviewCard.js";

export default function SpacingGrid({ pokemonArray, onFavoriteClick }) {
  let images = pokemonArray;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {images.map((item, value) => (
            <Grid key={value} item>
              <RecipeReviewCard
                pokemon={item}
                onFavoriteClick={onFavoriteClick}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
