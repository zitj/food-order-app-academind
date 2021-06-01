import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './Layout/Header/Header';
import CartProvider from './store/CartProvider/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const toggleShowCart = () => {
        return cartIsShown ? setCartIsShown(false) : setCartIsShown(true);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onShowCart={toggleShowCart} />}
            <Header onShowCart={toggleShowCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
