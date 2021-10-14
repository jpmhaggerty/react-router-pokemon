import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
// import Cart from './Cart';
import Products from './Products';
import Home from './Home';
import Product from './Product';

const Cart = () => {
    // let match = useRouteMatch();
    return (
        <>
        <header className="cart-header">
            <h1>Cart</h1>
            <p>
                <nav>
                <NavLink exact to={`/home`}>Home</NavLink>
                <NavLink exact to={`/products`}>Products</NavLink>
                <NavLink exact to={`/cart`}>View Cart</NavLink>
                </nav>
            </p>
        </header>
        <h1>Your Cart</h1>
        <p>
            View or remove items from your cart:
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
        </>
    );
}
export default Cart;