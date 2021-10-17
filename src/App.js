import * as React from "react";
import "./components/App.css";
import Home from "./components/Home.js";
import Favorites from "./components/Favorites.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.js";
import { useState, useEffect } from "react";

let Data = React.createContext();

function App() {
  const stub = [
    {
      favorites: true,
      forms: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-form/1/",
        },
      ],
      height: 7,
      id: 1,
      moves: [
        {
          move: {
            name: "razor-wind",
          },
        },
        {
          move: {
            name: "swords-dance",
          },
        },
        {
          move: {
            name: "cut",
          },
        },
        {
          move: {
            name: "bind",
          },
        },
      ],
      name: "bulbasaur",
      order: 1,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
              back_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
              front_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
              back_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
              front_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
              front_female: null,
            },
          },
        },
      },
      types: [
        {
          type: {
            name: "grass",
          },
        },
        {
          type: {
            name: "poison",
          },
        },
      ],
      weight: 69,
    },
  ];

  const [pokeData, setPokeData] = useState(stub);
  const [favArray, setFavArray] = useState(stub);

  async function getOnlineData(url) {
    const result = await fetch(url);
    const json = await result.json();
    Data = json;
    Data.favorites = false;
    return;
  }

  async function addPokemon(name) {
    await getOnlineData(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (Data) {
      setPokeData((pokeData) => [...pokeData, Data]);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    for (let i = 0; i < pokeData.length; i++) {
      if (pokeData[i].name === event.target.value) {
        alert(`${event.target.value} already in the deck...`);
        event.target.value = "";
        return;
      }
    }
    addPokemon(event.target.value);
    event.target.value = "";
  }

  function handleFavoriteClick(event, pokemon) {
    event.preventDefault();
    let tempData = pokeData;
    let tempFav = favArray;
    let idxFull = pokeData.indexOf(pokemon.pokemon);
    let idxFav = favArray.indexOf(pokemon.pokemon);
    if (pokemon.pokemon.favorites) {
      tempData[idxFull].favorites = false;
      setPokeData(tempData);
      tempFav.splice(idxFav, 1, 0);
      setFavArray(tempFav);
    } else {
      tempData[idxFull].favorites = true;
      setPokeData(tempData);
      tempFav = [];
      for (let i = 0; i < pokeData.length; i++) {
        if (pokeData[i].favorites) {
          tempFav.push(pokeData[i]);
        }
      }
      setFavArray(tempFav);
    }
  }

  useEffect(() => {
    async function addFirstList() {
      await getOnlineData(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      for (let i = 1; i < Data.results.length; i++) {
        addPokemon(Data.results[i].name);
      }
    }
    addFirstList();
  }, []);

  return (
    <>
      <div className="App">
        <SearchAppBar title="PokeDex" onHandleSearch={handleSearch} />
        <Switch>
          <Route
            exact
            path={`/home`}
            render={(props) => (
              <Home
                pokemonArray={pokeData}
                onFavoriteClick={handleFavoriteClick}
              />
            )}
          ></Route>
          <Route
            exact
            path={`/favorites`}
            render={(props) => (
              <Favorites
                pokemonArray={favArray}
                onFavoriteClick={handleFavoriteClick}
              />
            )}
          ></Route>
          <Redirect to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;
