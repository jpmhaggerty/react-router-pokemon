import * as React from "react";
import "./components/App.css";
import Home from "./components/Home.js";
import Pokemon from "./components/Pokemon.js";
import Types from "./components/Types.js";
import Favorites from "./components/Favorites.js";
import Cart from "./components/Cart.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.js";
import { useState, useEffect } from "react";

//var pokemonArray = React.createContext();

function App() {
  const [pokeList, setPokeList] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokeList(data);
      });
  }, []);

  // pokemonArray = pokeList;
  // console.log("Pokemon array:", pokemonArray);

  // is this the best place for this array? possibly createContext?
  let favArray = [
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
  ];

  // let favArray = pokeList.results;

  //let favArray = pokemonArray;

  return (
    <>
      <div className="App">
        {/* navbar will rerender on every page if we leave it in the primary jsx set */}
        <SearchAppBar title="PokeDex" />

        {/* list out our pages and locations with switch  */}
        {/* when the primary page rerenders, one of these will be loaded also- default is home  */}
        <Switch>
          <Route
            exact
            path={`/home`}
            render={(props) => <Home pokemonArray={pokeList} />}
          ></Route>
          {/* <Route exact path={`/home`} component={Home}></Route> */}
          <Route exact path={`/pokemon`} component={Pokemon}></Route>
          <Route exact path={`/favorites`} component={Favorites}></Route>
          <Route exact path={`/types`} component={Types}></Route>
          <Route exact path={`/cart`} component={Cart}></Route>
          <Route
            exact
            path={`/favorites`}
            render={(props) => <Favorites favArray={favArray} />}
          ></Route>
          <Redirect to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;
