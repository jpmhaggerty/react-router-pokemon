import * as React from 'react';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './RecipeReviewCard.js';


export default function SpacingGrid({images}) {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;


  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {images.map((item, value) => (
            <Grid key={value} item>
              <RecipeReviewCard image={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
