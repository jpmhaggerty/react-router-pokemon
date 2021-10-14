import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
import Products from './Products';
import Home from './Home';
import Product from './Product';

function App() {
  // let match = useRouteMatch();
  return (
    <>
    <div className="App">
      {/* <Redirect to={`/home`} /> */}
    </div>
    {/* <Route exact path={`/home`} component={Home}> */}
      {/* <Home /> */}
    {/* </Route> */}
    </>
  );
}

export default App;


// Home page
// Products page
// Individual product page
// View cart
// Checkout page