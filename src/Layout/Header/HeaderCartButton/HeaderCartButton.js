import { useContext } from 'react';

import React from 'react';
import CartIcon from '../../../components/Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import styles from './style/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <button onClick={props.onShowCart} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
