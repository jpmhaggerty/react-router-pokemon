import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
import Products from './Products';
// import Home from './Home';
import Product from './Product';

function Home() {
    return (
        <div className="Home">
        <header className="Home-header">
            <h1>The World's #1 E-Commerce Site</h1>
            <p>
            <nav>
                <NavLink exact to={`/home`}>Home</NavLink>
                <NavLink exact to={`/products`}>Products</NavLink>
                <NavLink exact to={`/cart`}>View Cart</NavLink>
            </nav>
            </p>
        </header>
        <p>
            View our products:
        </p>
        <Switch>
            <Route exact path={`/home`} component={Home}>
                <Home />
            </Route>
            <Route exact path={`/products`} component={Products}>
                <Products />
            </Route>
            <Route exact path={`/cart`} component={Cart}>
                <Cart/>
            </Route>
        </Switch>
        </div>
    );
}

export default Home;