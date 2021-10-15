import "./App.css";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";

function Home() {
  //still need to collect the first ten items from the array and process

  //develop new image, etc. array from pokemon API
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>The World's #1 E-Commerce Site</h1>
        <p>
          {/* would these make more sense in the nav bar? */}
          <Grid container justifyContent="center" spacing={3}>
            <nav>
              <Grid item xs={2}>
                <NavLink exact to={`/products`}>
                  Products
                </NavLink>
              </Grid>
              <Grid item xs={2}>
                <NavLink exact to={`/cart`}>
                  View Cart
                </NavLink>
              </Grid>
            </nav>
          </Grid>
        </p>
      </header>
      <p>View our products:</p>

      {/* should probably add buttons to the cards to set favorites- use heart/ thumb icon?  */}
      <Grid container justifyContent="center" spacing={2}>
        <SwipeableTextMobileStepper images={images} />
      </Grid>
      <SpacingGrid images={images} />
    </div>
  );
}

export default Home;
